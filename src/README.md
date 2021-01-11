# NOTE:

Instead of `./src` folder, this project uses `./esm` folder. Develop in `./esm` folder. Include `./esm` folder in development or production. It's not optimized, but the files are all small. In the future, this project may be refactored to use `./src` folder for development, then compile to `./esm` for production. That will be backwards-compatible.

Build process takes `./esm` folde (instead of `./src`) and converts it to `./cjs` (instead of to `./dist`).

Why not just use UMD modules standard? **Code splitting**. By specifying your choice "esm" (ES Modules), "cjs" (CommonJS) or "\_\_" (`window.__`), you're able to download only the specific functions you actually need, not everthing else. Additionally on the browser, you can download multiple times using multiple`<script>`tags (for example both`@twodashes/universal`and`@twodashes/browser`, or`/sort_strings`and`/arrays`). All downloaded scripts will be combined into one single flat`window.__` dictionary/object. See [code sandbox](https://codesandbox.io/s/twodashes-universal-demo-2r4os). Please do message ([Paul](https://paulshorey.com)) if this is unclear, or if may know a better way of accomplishing all this.
