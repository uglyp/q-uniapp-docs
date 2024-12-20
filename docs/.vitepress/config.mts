import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/q-uniapp-docs/',
  title: 'q-uniapp 文档中心',
  description: '基于 uniapp 多端开发框架',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'q-uniapp, uniapp, uni-app, vue, vue3, vite,template, typescript, ts',
      },
    ],
    ['link', { rel: 'icon', href: '/q-uniapp-docs/favicon.ico' }], // 这里要加上 base 前缀，否则资源访问不到
    [
      'meta',
      {
        name: 'twitter:title',
        content: '基于 uniapp 多端开发框架',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: 'uglyp' }],
    [
      'meta',
      {
        name: 'twitter:image:src',
        content:
          'https://opengraph.githubassets.com/1cac1150838995e1f7d1643c00eee51a5d884f2054f995c9d3225b07b0eddb39/uglyp/q-uniapp',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content:
          'https://opengraph.githubassets.com/1cac1150838995e1f7d1643c00eee51a5d884f2054f995c9d3225b07b0eddb39/uglyp/q-uniapp',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:alt',
        content: 'uniapp 多端开发框架',
      },
    ],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '600' }],
    ['meta', { property: 'og:site_name', content: 'GitHub' }],
    ['meta', { property: 'og:type', content: 'object' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'uniapp 开发框架',
      },
    ],
    ['meta', { property: 'og:url', content: 'https://github.com/uglyp/q-uniapp' }],
    [
      'meta',
      {
        property: 'og:description',
        content: ' uniapp 开发框架',
      },
    ],
    ['script', { async: '', src: 'https://hm.baidu.com/hm.js?081c2ec121383d9e7d5a35c5833ab6ff' }],
    ['script', { async: '', src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: 'q-uniapp',
    nav: [
      {
        text: '快速开始',
        link: '/base/2-start',
        activeMatch: '/base',
      },
      {
        text: '相关链接',
        link: '/other/links/links',
        activeMatch: '/other',
      },
    ],
    sidebar: [
      {
        text: '基础·必看',
        base: '/base/',
        items: [
          { text: '介绍', link: '1-introduction' },
          {
            text: '快速开始',
            link: '2-start',
          },
          { text: 'uni 插件', link: '3-plugin' },
          { text: '样式篇', link: '4-style' },
          { text: '图标篇', link: '5-icons' },
          { text: 'SVG篇', link: '6-svg' },
          { text: 'UI库选型篇', link: 'ui/ui' },
          { text: 'UI库替换篇', link: '7-ui' },
          { text: '请求篇', link: '8-request' },
          { text: '状态篇', link: '9-state' },
          { text: '多语言篇', link: '10-i18n' },
          { text: '运行发布', link: '11-build' },
          { text: '环境变量', link: '12-env' },
          { text: 'hbx 模板', link: '13-hbx' },
          { text: '常见问题', link: '14-faq' },
          { text: '常见问题2', link: '15-faq' },
          { text: '最佳实践', link: '20-best' },
        ],
      },
      {
        text: '延伸',
        base: '/other/',
        items: [
          { text: '相关链接', link: 'links/links' },
          { text: '图片占位图', link: 'image/image' },
          { text: 'iconfont详细版', link: 'iconfont/iconfont' },
          { text: 'Git 提交优化', link: 'czg/czg' },
          { text: '文件资源展示优化', link: 'files/files' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright (c) 2024 uglyp',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/uglyp/q-uniapp' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0m6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>`,
        },
        link: 'https://gitee.com/uglyp/q-uniapp',
        ariaLabel: 'Gitee',
      },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
  },
})
