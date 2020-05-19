module.exports = {
  root: true,
  env: {
    node: true,
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": 0,
    quotes: ["error", "double", {
      avoidEscape: true,
    }],
    "comma-dangle": ["error", "always-multiline"],
    "semi": "always",
  },
}