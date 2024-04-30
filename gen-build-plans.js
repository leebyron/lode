/*
# Lode is a variant of Iosevka
# It's a portmanteu of Lee and Code, and sounds like "load"
#
# It's goal is readability and minimalism:
#   - Removes most serifs where possible
#   - Ends curves on the 90deg horizontal instead of 180deg vertical
#   - Follows neo-grotesque form when available
#   - Minimal but useful punctuation ligatures
#   - Defaults to a wider form, with semi-widths available
*/

const Lode = {
  family: 'Lode',
  spacing: 'normal',
  exportGlyphNames: true,
  buildTextureFeature: true,

  metricOverride: {
    leading: 1350, //# leading = 1200    //# default is 1250
    ascender: 800, //# height of b - default is 735
    cap: 725, //# height of H - default is 735
    symbolMid: 350, //# default 340
    xHeight: 570, //# height of x - default is 520
    parenSize: 1000, //# default 966
  },

  variants: {
    design: {
      zero: 'oval-dotted', //# "dotted"                   //# "slashed-split",
      one: 'no-base',
      two: 'straight-neck-serifless',
      three: 'two-arcs',
      four: 'closed-serifless',
      five: 'oblique-arched-serifless',
      six: 'open-contour',
      //# six: "straight-bar",
      seven: 'straight-serifless',
      eight: 'two-circles',
      nine: 'open-contour',
      //# nine: "straight-bar",
      tilde: 'low',
      asterisk: 'hex-low',
      underscore: 'high', //# "above-baseline",
      caret: 'medium',
      brace: 'curly',
      guillemet: 'straight',
      'number-sign': 'slanted',
      at: 'compact',
      dollar: 'open',
      cent: 'open',
      percent: 'rings-continuous-slash',
      bar: 'force-upright',
      'lig-plus-chain': 'with-notch',
      'capital-a': 'straight-serifless',
      'capital-b': 'standard-serifless',
      'capital-d': 'more-rounded-serifless',
      'capital-g': 'toothless-rounded-serifless-hooked',
      'capital-i': 'short-serifed',
      'capital-j': 'serifless',
      'capital-k': 'straight-serifless',
      'capital-m': 'hanging-serifless',
      'capital-n': 'standard-serifless',
      'capital-q': 'curly-tailed', //# "crossing",
      'capital-v': 'straight-serifless',
      'capital-w': 'straight-serifless', //# "straight-flat-top-serifless",
      'capital-x': 'straight-serifless',
      d: 'toothed-serifless',
      f: 'flat-hook-serifless-crossbar-at-x-height', //# "flat-hook-serifless",
      g: 'single-storey-serifless', //# "single-storey-flat-hook-serifless",

      //# First attempt
      //# i: "hooky",
      //# l: "semi-tailed",
      //# j: "flat-hook-serifed",

      //# Classic
      //# i: "zshaped",
      //# l: "zshaped",
      //# j: "flat-hook-serifed",

      //# Sans? didn't like this
      //# i: "flat-tailed",
      //# l: "flat-tailed",
      //# j: "flat-hook-serifless",

      //# Another attempt
      i: 'hooky',
      l: 'serifed-flat-tailed',
      j: 'flat-hook-serifed',

      k: 'straight-serifless',
      q: 'tailed-serifless',
      r: 'hookless-serifless',
      //# t: "flat-hook",
      t: 'flat-hook-short-neck2',
      v: 'straight-serifless',
      //# w: "straight-serifless",
      w: 'straight-flat-top-serifless',

      'long-s': 'flat-hook-serifless',
      eszet: 'sulzbacher-serifless',
      'lower-eth': 'straight-bar',
      'lower-delta': 'rounded',
      'lower-iota': 'serifed-flat-tailed',
      'lower-mu': 'toothed-serifless',
      'lower-xi': 'rounded',
      'lower-tau': 'flat-tailed',
      'cyrl-capital-zhe': 'symmetric-connected',
      'cyrl-zhe': 'symmetric-connected',
      'cyrl-capital-u': 'straight-serifless',
    },
    italic: {
      d: 'tailed-serifless',
      f: 'flat-hook-tailed-crossbar-at-x-height', //# "flat-hook-tailed",
      g: 'double-storey',
      h: 'tailed-serifless',
      i: 'serifed-diagonal-tailed',
      k: 'cursive-bottom-right-serifed',
      l: 'serifed-diagonal-tailed',
      m: 'tailed-serifless',
      n: 'tailed-serifless',
      q: 'diagonal-tailed-serifless',
      //# q: "tailed-serifless",
      //# t: "diagonal-tailed",
      t: 'diagonal-tailed-short-neck2',
      //# v: "straight-serifless",
      //# w: "straight-flat-top-serifless",
      x: 'semi-chancery-straight',
      y: 'cursive-flat-hook-serifless',
      z: 'curly-serifless',

      'long-s': 'flat-hook-tailed',
      eszet: 'longs-s-lig-tailed-serifless',
      'lower-eth': 'straight-bar',
      'lower-delta': 'rounded',
      'lower-iota': 'serifed-diagonal-tailed',
      'lower-mu': 'toothed-serifless',
      'lower-xi': 'rounded',
      'lower-tau': 'diagonal-tailed',
      'cyrl-capital-zhe': 'symmetric-connected',
      'cyrl-zhe': 'symmetric-connected',
      'cyrl-capital-u': 'cursive-serifless',
      'cyrl-u': 'cursive-serifless',

      //# Which gets slanted by the italic
      'number-sign': 'upright',
    },
  },

  ligations: {
    enables: [
      'center-ops',
      'center-op-trigger-plus-minus-l',
      'center-op-trigger-plus-minus-r',
      'center-op-trigger-equal-l',
      'center-op-trigger-equal-r',
      'center-op-trigger-bar-l',
      'center-op-trigger-bar-r',
      'center-op-trigger-angle-inside',
      'center-op-trigger-angle-outside',
      'center-op-influence-dot',
      'center-op-influence-colon',
      'arrow-l',
      'arrow-r',
      'arrow-lr',
      'counter-arrow-l',
      'counter-arrow-r',
      'trig',
      'eqeq',
      'lteq-separate',
      'gteq-separate',
      'ltgt-diamond-tag',
      'ltgt-slash-tag',
      'brst',
      'slash-asterisk',
      'kern-dotty',
      'kern-bars',
      'logic',
      'llgg',
      'llggeq',
      'html-comment',
      //# "colon-greater-as-colon-arrow",
      'brace-bar',
      'brack-bar',
      'tilde-tilde-tilde',
      'tilde-tilde',
      'minus-minus-minus',
      'plus-plus-plus',
      'underscore-underscore-underscore',
      'hash-hash-hash',
      'hash-hash',

      //# Custom additions
      'x-multiply',
      'numeric-literals',
      'zig-zag-caret',
      'zig-zag-slash',
      'escape-seq',
    ],
  },

  widths: {
    Normal: {
      shape: 548,
      menu: 5,
      css: 'normal',
    },
    // SemiCondensed: {
    //   shape: 500,
    //   menu: 4,
    //   css: 'semi-condensed',
    // },
    // SemiExtended: {
    //   shape: 600,
    //   menu: 6,
    //   css: 'semi-expanded',
    // },
  },

  weights: {
    Regular: {
      shape: 360,
      menu: 400,
      css: 400,
    },
    Bold: {
      shape: 640,
      menu: 700,
      css: 700,
    },
  },

  slopes: {
    Upright: {
      angle: 0,
      shape: 'upright',
      menu: 'upright',
      css: 'normal',
    },
    // Italic: {
    //   angle: 15, // 9.4
    //   shape: 'italic',
    //   menu: 'italic',
    //   css: 'italic'
    // },
  },
}

const LodeDark = Object.assign({}, Lode, {
  family: 'Lode Dark',
  weights: {
    Regular: {
      shape: 260,
      menu: 400,
      css: 400,
    },
    Bold: {
      shape: 520,
      menu: 700,
      css: 700,
    },
  },
})

const LodeTerm = Object.assign({}, Lode, {
  family: 'Lode Term',
  spacing: 'term',
})

const LodeDarkTerm = Object.assign({}, LodeDark, {
  family: 'Lode Dark Term',
  spacing: 'term',
})

const config = {
  buildPlans: {
    Lode,
    LodeDark,
    LodeTerm,
    LodeDarkTerm,
  },
  collectPlans: {
    Lode: {
      release: true,
      from: ['Lode'], // , 'LodeTerm'],
    },
    LodeDark: {
      release: true,
      from: ['LodeDark'], // , 'LodeDarkTerm'],
    },
  },
}

// ----------------------------------------------------------------------

process.stdout.write(toToml(config))

function toToml(obj) {
  let output = ''
  printObj(obj)
  return output

  function printObj(object, path) {
    let needsHeader = path != null
    let nestedObjects = []

    for (let [key, value] of Object.entries(object)) {
      while (isObj(value) && Object.entries(value).length === 1) {
        const [nestedKey, nestedValue] = Object.entries(value)[0]
        key += '.' + nestedKey
        value = nestedValue
      }

      if (isObj(value)) {
        nestedObjects.push([key, value])
      } else {
        if (needsHeader) {
          needsHeader = false
          output += (output ? '\n' : '') + `[${path}]\n`
        }
        output += `${key} = ${JSON.stringify(value, null, 2)}\n`
      }
    }

    for (let [key, value] of nestedObjects) {
      printObj(value, path ? path + '.' + key : key)
    }
  }
}

function isObj(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
