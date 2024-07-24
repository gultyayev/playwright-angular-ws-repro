module.exports = {
  "*.{js,ts,html}": ["eslint --fix --cache", "prettier --write"],
  "*.scss": ["stylelint --fix --cache", "prettier --write"],
  "!*.{ts,js,html,scss,svg}": "prettier --write --ignore-unknown",
  "*.svg": "svgo",
}