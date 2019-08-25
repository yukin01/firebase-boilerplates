module.exports = {
  extends: [
    // https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
    "eslint:recommended",
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/base.json
    "plugin:@typescript-eslint/recommended",
    // https://github.com/prettier/eslint-plugin-prettier
    "plugin:prettier/recommended",
    // https://github.com/yannickcr/eslint-plugin-react
    "plugin:react/recommended",
    // https://github.com/prettier/eslint-config-prettier
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  plugins: ["node"],
  env: { browser: true, node: true },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    node: {
      tryExtensions: [".ts", ".tsx", ".js", "jsx", ".json", ".node"]
    }
  }
}