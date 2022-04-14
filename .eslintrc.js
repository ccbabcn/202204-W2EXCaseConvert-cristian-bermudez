module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue"],
  rules: {},
};