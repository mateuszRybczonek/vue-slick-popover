module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "standard",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:vue/recommended"
  ],
  plugins: ["mocha", "chai-expect"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] }
    }
  },
  rules: {
    "chai-expect/missing-assertion": "error",
    "chai-expect/no-inner-compare": "error",
    "dot-notation": "error",
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    curly: ["error", "all"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-lonely-if": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "mocha/handle-done-callback": "error",
    "mocha/no-exclusive-tests": "error",
    "mocha/no-global-tests": "error",
    "mocha/no-identical-title": "error",
    "mocha/no-nested-tests": "error",
    "mocha/no-pending-tests": "error",
    "mocha/no-sibling-hooks": "error",
    "mocha/no-skipped-tests": "error",
    "mocha/no-return-and-callback": "error",
    "mocha/no-top-level-hooks": "error",
    "object-shorthand": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: "break", next: "*" },
      { blankLine: "always", prev: "*", next: "class" },
      { blankLine: "always", prev: "*", next: "default" },
      { blankLine: "always", prev: "*", next: "do" },
      { blankLine: "always", prev: "*", next: "for" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "*", next: "iife" },
      { blankLine: "always", prev: "*", next: "switch" },
      { blankLine: "always", prev: "*", next: "try" },
      { blankLine: "always", prev: "*", next: "while" }
    ],
    "prefer-const": "error",
    "require-await": "error",
    "semi": ["off", "always"],
    "space-before-function-paren": ["error", "never"],
    "quotes": ["off", "double"],
    "vue/block-spacing": "error",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    "vue/html-self-closing": "off",
    "vue/no-parsing-error": [
      "error",
      {
        "x-invalid-end-tag": false
      }
    ],
    "vue/max-attributes-per-line": [
      1,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  },
  overrides: [
    {
      files: ["*.test.js"],
      env: {
        mocha: true
      },
      globals: {
        expect: true,
        describe: true
      }
    }
  ]
};
