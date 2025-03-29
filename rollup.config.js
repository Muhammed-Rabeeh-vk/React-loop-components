import babel from "@rollup/plugin-babel"; 

export default {
  input: "index.js",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.esm.js", format: "esm" }
  ],
  external: ["react"],
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"]
    })
  ]
};
