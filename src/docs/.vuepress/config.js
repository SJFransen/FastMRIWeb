const path = require('path')
const { description } = require('../../package')
// const getConfig = require("vuepress-bar");
// var { _, sidebar } = getConfig();

module.exports = {
  base: '/FastMRIWeb/',
  title: 'FastMRI.eu',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#EC7700' }]
  ],
  bundlerConfig: {
    vuePluginOptions: {
      compilerOptions: {
        customElement: true
      }
    }
  },
  themeConfig: {
    logo: '/logo.png',
    repo: 'snorthman/FastMRIWeb',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: 'Edit this page',
    docsDir: 'docs',
    lastUpdated: 'Last updated',
    darkMode: false,
    // sidebar: [
    //   {
    //     path: '/research/',
    //     title: 'Research lines',
    //     collapsable: false,
    //     children: sidebar.find(o => o.title == "Research").children.slice(1)
    //   }
    // ],
    navbar: [
      {
        text: 'FastMRI',
        link: '/'
      },
      {
        text: 'People',
        link: '/people/',
      },
      {
        text: 'Research',
        link: '/research/'
      },
      {
        text: 'Contact',
        link: '/contact/'
      }
    ]
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: './components'
      },
    ],
    // 'seo', 'authors', 'mathjax'
  ]
}