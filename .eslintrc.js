module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "react-app",
    'airbnb',
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    "import"
  ]
};