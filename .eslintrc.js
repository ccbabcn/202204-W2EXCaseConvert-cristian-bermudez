module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue"],
  rules: { "no-plusplus": "off", "no-restricted-syntax": "off" },
};
