// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  //extends: 'standard',
  // required to lint *.vue files
  plugins: [
      'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    //'arrow-parens': 0,
    // allow async-await
    //'generator-star-spacing': 0,
    // allow debugger during development
    //'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
      "comma-dangle": ["error", "never"],
      "no-cond-assign": 2,
      //"no-console": 2,
      "no-constant-condition": 2,
      "no-control-regex": 2,
      "no-debugger": 2,
      "no-dupe-args": 2,
      "no-dupe-keys": 2,
      "no-duplicate-case": 2,
      "no-empty": 2,
      "no-empty-character-class": 2,
      "no-ex-assign": 2,
      "no-extra-boolean-cast": 2,
      "no-extra-parens": 0,
      "no-extra-semi": 2,
      "no-func-assign": 2,
      "no-inner-declarations": ["error", "functions"],
      "no-invalid-regexp": 2,
      "no-irregular-whitespace": 2,
      "no-negated-in-lhs": 2,
      "no-obj-calls": 2,
      "no-regex-spaces": 2,
      "quote-props": 2,
      "no-sparse-arrays": 2,
      "no-unreachable": 2,
      "use-isnan": 2,
      "valid-jsdoc": ["error", {
          "requireReturn": false,
          "requireParamDescription": false,
          "requireReturnDescription": true
      }],
      "valid-typeof": ["error", {
          "requireStringLiterals": true
      }],
      "block-scoped-var": 2,
      "complexity": 0,
      "consistent-return": 2,
      "curly": ["error", "all"],
      "default-case": 0,
      "dot-notation": 0,
      "eqeqeq": 0,
      "no-alert": 1,
      "no-caller": 2,
      "guard-for-in": 0,
      "no-div-regex": 2,
      "no-else-return": 0,
      "no-labels": ["error", {
          "allowLoop": false,
          "allowSwitch": false
      }],
      "no-eq-null": 2,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-extra-bind": 2,
      "no-fallthrough": 2,
      "no-floating-decimal": 2,
      "no-implied-eval": 2,
      "no-iterator": 2,
      "no-lone-blocks": 2,
      "no-loop-func": 2,
      "no-multi-spaces": 2,
      "no-multi-str": 2,
      "no-global-assign": 2,
      "no-new": 2,
      "no-new-func": 2,
      "no-new-wrappers": 2,
      "no-octal": 2,
      "no-octal-escape": 2,
      "no-param-reassign": 0,
      "no-proto": 2,
      "no-redeclare": 2,
      "no-return-assign": 2,
      "no-script-url": 2,
      "no-self-compare": 2,
      "no-sequences": 2,
      "no-throw-literal": 2,
      "no-unused-expressions": 2,
      "no-void": 2,
      "no-warning-comments": [1, {"terms": ["todo", "fixme", "any other term"]}],
      "no-with": 2,
      "radix": 0,
      "vars-on-top": 0,
      "wrap-iife": [2, "any"],
      "yoda": [2, "never", {"exceptRange": true}],
      "strict": [2, "function"],
      "no-catch-shadow": 2,
      "no-delete-var": 2,
      "no-label-var": 2,
      "no-shadow": 2,
      "no-shadow-restricted-names": 2,
      "no-undef": 2,
      "no-undef-init": 2,
      "no-undefined": 2,
      "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
      "no-use-before-define": [2, "nofunc"],
      "no-mixed-requires": [1, true],
      "no-new-require": 2,
      "no-path-concat": 0,
      "no-process-exit": 2,
      "no-restricted-modules": 0,
      "no-sync": 0,
      "indent": 2,
      "brace-style": [2, "1tbs", { "allowSingleLine": false}],
      "camelcase": [2, {"properties": "never"}],
      "comma-style": [2, "last"],
      "consistent-this": [0, "self"],
      "eol-last": 2,
      "func-names": 0,
      "func-style": 0,
      "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
      "max-nested-callbacks": 0,
      "new-cap": [2, {"newIsCap": true, "capIsNew": false}],
      "new-parens": 2,
      "newline-after-var": 0,
      "no-array-constructor": 2,
      "no-inline-comments": 0,
      "no-lonely-if": 0,
      "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
      "no-multiple-empty-lines": [2, {"max": 2}],
      "no-nested-ternary": 2,
      "no-new-object": 2,
      "no-spaced-func": 2,
      "no-ternary": 0,
      "no-trailing-spaces": 2,
      "no-underscore-dangle": 2,
      "no-extra-parens": 0,
      "one-var": 0,
      "operator-assignment": 0,
      "padded-blocks": [2, "never"],
      "quote-props": 0,
      "quotes": [1, "single", "avoid-escape"],
      "semi": [2, "always"],
      "semi-spacing": [2, {"before": false, "after": true}],
      "sort-vars": 0,
      "space-before-blocks": [2, "always"],
      "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
      "space-infix-ops": [2, {"int32Hint": true}],
      "keyword-spacing": 2,
      "space-unary-ops": [2, { "words": true, "nonwords": false}],
      "wrap-regex": 2,
      "no-var": 0,
      "generator-star-spacing": [2, "both"],
      "max-depth": 0,
      "max-len": 0,
      "max-params": 0,
      "max-statements": 0,
      "no-bitwise": 0,
      "no-plusplus": 0
  }
}
