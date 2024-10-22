# Lode — a typeface for code

> This is a work in progress! Thanks for being here, and watch out for bugs.

Lode is a monospace typeface for reading and writing code in editors and
terminals. Lode is designed for clarity at small sizes on high-resolution
screens featuring a very high x-height, thin strokes, slender column
widths, open aperatures, and neo-grotesque forms with disambiguating
characters.

Lode is a modified variant of the excellent open-source [Iosevka](https://typeof.net/Iosevka/).


- `Term` variants with single-unit spaced arrows for use in terminals.
- `Dark` variants with thinner strokes for improved contrast on dark backgrounds.
- Texture healing allowing characters to expand into neighboring columns for better legibility.
- A huge variety of complex ligatures intended to make common programming operators and markup structures easier to read while staying true to the original characters used.

## Installation

Lode can be installed by downloading files from Github Releases. Use `.ttc` locally and `.woff2` for browsers.

## Building

Lode is maintained as a patch of changes atop Iosevka. Run `./build.sh` to apply them and generate the font.
