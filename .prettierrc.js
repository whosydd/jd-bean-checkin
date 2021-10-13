module.exports = {
  printWidth: 100, // 代码宽度建议不超过100字符
  tabWidth: 2, // tab缩进2个空格
  useTabs: false, // 使用tab缩进
  semi: false, // 末尾分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // object中的key是否使用引号
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: 'es5', // 尾随逗号
  bracketSpacing: true, // object中括号之间添加空格 | 示例 { foo: bar }
  jsxBracketSameLine: false, // jsx标签有多个属性时，将>单独放一行
  arrowParens: 'avoid', // 箭头函数仅在必要时使用()
  proseWrap: 'preserve', // markdown wrap
  htmlWhitespaceSensitivity: 'css', // html空格敏感度
  vueIndentScriptAndStyle: false, // vue中缩进script和style标签
  endOfLine: 'lf', // 行尾换行
  embeddedLanguageFormatting: 'auto', // 格式化嵌入代码
}
