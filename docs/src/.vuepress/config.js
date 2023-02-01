const { description, name } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Telematic - Matemáticas',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: `/maths/`,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Bachillerato',
        link: '/bachillerato/',
      },
      {
        text: 'Secundaria',
        link: '/secundaria/'
      }
    ],
    sidebar: {
      '/bachillerato/': [
        {
          title: 'Bachillerato',
          collapsable: false,
          children: [
            '',
            'test',
          ]
        }
      ],


      '/secundaria/': [
        {
          title: 'Secundaria',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],

      '/': [
        '',
      ]

    },


    
  },

    markdown: {
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
