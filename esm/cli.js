/*
 PARSE CLI ARGS

 Example: `node myScript.js -f1 --flag2 var1=whatever`
 args = {
  __node__: '/usr/local/bin/node',
  __file__: '~/my/path/myScript.js',
  -f1: undefined,
  --flag2: undefined,
  var1: 'whatever',
 }
 Use args.hasOwnProperty('--flag2') to check for usage of
 flags which have no value.

 NOTE:
 Too keep things simple, limit arguments to the format shown
 in example above.
 This particular parser is not compatible with args values
 which come after a space ' ' instead of an '=' equal symbol.

 */
function parse_cli_args() {
  // BROWSER JS (front-end) DOES NOT HAVE CLI ARGUMENTS
  if (typeof process === "undefined") {
    return {}
  }
  // NODE JS (back-end)
  let args = {};
  for (let j = 0; j < process.argv.length; j++) {
    let argv = process.argv[j];
    if (j === 0) {
      // first arg is node path
      args["__node__"] = argv;
    } else if (j === 1) {
      // first arg is script path
      args["__file__"] = argv;
    } else {
      // read each CLI argument as {key:value}
      let arr = argv.split("=");
      // if no value (arr[1] is undefined), that's ok
      args[arr[0]] = arr[1];
    }
  }
  return args
}


/*
 * EXPORT FOR BROWSER
 */
if (typeof window === "object") {
  const browser = { parse_cli_args };
  // set up for export
  window.__ = window.__ || {};
  // flatten
  for (let func in browser) {
    window.__[func] = browser[func];
  }
}
/* EXPORT FOR NODE */
export { parse_cli_args };
