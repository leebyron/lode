import { readFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

await serve(
  async () => `
<html>
  <head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; }
    *:focus {
      outline: none;
    }
    div {
      padding: 20px;
      font-size: max(10px, inherit);
      white-space: break-spaces;
      tab-size: 4;
    }
    textarea {
      padding: 20px;
      width: 100%;
      box-sizing: border-box;
      overflow-y: hidden;
      background: #88888833;
      border: none;
      resize: none;
      font-family: inherit;
      font-size: max(10px, inherit);
      color: inherit;
    }
  </style>
  <script>
    function textarea() {
      return document.body.children[0]
    }
    function resize() {
      textarea().style.height = 'auto';
      textarea().style.height = textarea().scrollHeight + 'px';
    }
    function initStyle() {
      textarea().value = document.body.style = \`
        font-family: Lode;
        font-size: 12.8px;
        /*line-height: 1.25;*/
        /*font-style: italic;*/
        /*font-weight: bold;*/
        background: #1e2025;
        color: white;
        /*background: #e1dfda;*/
        /*color: #222;*/
      \`.split('\\n').map(l => l.trim()).filter(Boolean).join('\\n')
      resize()
    }
    function setStyle() {
      document.body.style = textarea().value.replace(/(?<!;)\\n/g, ';\\n');
      resize()
    }
    function onKey(event) {
      if (event.key === '/' && (event.metaKey || event.ctrlKey)) {
        const {selectionStart, selectionEnd} = textarea()
        let nextSelStart = selectionStart, nextSelEnd = selectionEnd, doRemove, nextLineStart = 0
        textarea().value = textarea().value.split('\\n').map(line => {
          const start = nextLineStart
          const end = start + line.length
          nextLineStart = end + 1
          if (end < selectionStart || start > selectionEnd) return line
          const hasStart = line.startsWith('/*'), hasEnd = line.endsWith('*/')
          doRemove = doRemove ?? hasStart
          const moveStartBy = doRemove && hasStart ? -2 : !doRemove && !hasStart ? 2 : 0
          const moveEndBy = doRemove && hasEnd ? -2 : !doRemove && !hasEnd ? 2 : 0
          nextSelStart += (selectionStart <= start ? 0 : moveStartBy) + (selectionStart < end ? 0 : moveEndBy)
          nextSelEnd += (selectionEnd <= start ? 0 : moveStartBy) + (selectionEnd < end ? 0 : moveEndBy)
          return doRemove ?
            line.slice(hasStart ? 2 : 0, hasEnd ? -2 : undefined) :
            (hasStart ? '' : '/*') + line + (hasEnd ? '' : '*/')
        }).join('\\n')
        setStyle()
        textarea().selectionStart = nextSelStart
        textarea().selectionEnd = nextSelEnd
      }
    }
  </script>
  </head>
  <body style="font-family:Lode;font-size:14px;background:#1e2025;color:white;" onload="initStyle()">
    <textarea oninput="setStyle()" onkeydown="onKey(event)"></textarea>
    <div spellcheck="false" contenteditable>${text2html(await file('font-test.txt'))}</div>
  </body>
</html>
`,
)

function text2html(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
  // .replace(/\n/g, '<br>')
}

async function file(name) {
  const dir = dirname(fileURLToPath(import.meta.url))
  return await readFile(join(dir, name), 'utf8')
}

async function serve(fn) {
  const server = createServer((request, response) => {
    const write = (code, content) => {
      response.writeHead(code, 'text/html')
      response.end(content)
    }
    request.url !== '/'
      ? write(404)
      : Promise.resolve()
          .then(fn)
          .then(
            result => write(200, result),
            error => write(500, error.stack),
          )
  })
  await promisify(server.listen).call(server, 3000)
  const { address, port } = server.address()
  console.log(`listening on http://[${address}]:${port}`)
}
