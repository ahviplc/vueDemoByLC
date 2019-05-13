// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    //貌似都没有用
    // 'no-tabs': 'off', //Vue 项目启动抛出 Expected indentation of 2 spaces but found 1 tab 该问题是由于 ESLint 的验证规则不匹配,在 .eslintrc.js 文件的 rules 中加入 'no-tabs': 'off' 即可不检测该问题
    // // allow paren-less arrow functions
    // 'arrow-parens': 0,
    // // allow async-await
    // 'generator-star-spacing': 0,
    // 禁止空格和 tab 的混合缩进
    //'no-mixed-spaces-and-tabs': 0
  }
}
