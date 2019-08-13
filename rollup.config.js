import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue2";
import scss from 'rollup-plugin-scss'

const pkg = require("./package.json");

const input = "src/index.js";

export default [
  {
    input,
    output: {
      file: pkg.browser,
      format: "umd",
      name: "VueSlickPopover",
      sourcemap: process.env.NODE_ENV === "dev"
    },
    plugins: [
      resolve(),
      vue({
        compileTemplate: true,
        css: false
      }),
      scss(),
      commonjs(),
      babel({
        exclude: ["node_modules/**"],
        runtimeHelpers: true
      }),
      terser()
    ]
  },
  {
    input,
    external: Object.keys(pkg.dependencies || {}),
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: process.env.NODE_ENV === "dev"
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: process.env.NODE_ENV === "dev"
      }
    ],
    plugins: [
      vue({
        compileTemplate: true,
        css: false
      }),
      scss(),
      babel({
        runtimeHelpers: true,
        exclude: ["node_modules/**"]
      })
    ]
  }
];
