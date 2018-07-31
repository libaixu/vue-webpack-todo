// 本文件没有引用

module.exports = (isDev) => {
  return {
    // 检查空格，但是最好用eslint检查模式
    preserveWhitepace: true,
    // extractCSS: !isDev,//不知道为什么webpack4这个不起作用
    cssMoudles: {
      // 我用不好使，不知道为什么
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
      // 在style标签上加上module，class所在标签 :class="$style.驼峰命名原class"
    },
    // hotReload: isDev//默认就是开发模式热加载
  }
}