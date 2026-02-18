import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NostalgiaLauncher",
  description: "Minecraft PE Alpha versions launcher for Windows, Linux and Android",
  base: '/',
  appearance: 'dark',

  themeConfig: {
    logo: '/icon.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Releases', link: '/releases' },
      {
        text: "Installation",
        activeMatch: '/installation/',
        items: [
          { text: "Desktop", link: "/installation/desktop" },
          { text: "Mobile", link: "/installation/mobile" }
        ]
      },
      {
        text: "Docs",
        activeMatch: '/docs/',
        items: [
          {
            text: "NostalgiaLauncher Desktop",
            items: [
              { text: "Common problems and their solutions", link: "/docs/common-problems" },
              { text: "Custom versions list source", link: "/docs/custom-versions-list-source" },
              { text: "Custom executable for versions", link: "/docs/custom-executable-for-versions" },
              { text: "Custom version", link: "/docs/custom-version" }
            ]
          },
          {
            text: "Ninecraft",
            items: [
              { text: "Fix large D-Pad buttons", link: "/docs/fix-large-d-pad-buttons" }
            ]
          }
        ]
      },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: {
      '/installation/': [
        {
          text: 'Installation',
          items: [
            { text: "Desktop", link: "/installation/desktop" },
            { text: "Mobile", link: "/installation/mobile" }
          ]
        }
      ],
      '/docs/': [
        {
          text: 'Docs',
          items: [
            {
              text: 'NostalgiaLauncher Desktop',
              items: [
                { text: "Common problems and their solutions", link: "/docs/common-problems" },
                { text: 'Custom versions list source', link: '/docs/custom-versions-list-source' },
                { text: 'Custom executable for versions', link: '/docs/custom-executable-for-versions' },
                { text: 'Custom version', link: '/docs/custom-version' }
              ]
            },
            {
              text: 'Ninecraft',
              items: [
                { text: 'Fix large D-Pad buttons', link: '/docs/fix-large-d-pad-buttons' }
              ]
            }
          ]
        }
      ]
    },

    footer: {
      message: 'NostalgiaLauncher 2023-2026',
      copyright: 'This website is not affiliated with Mojang, Microsoft, or any other entity'
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/4fv4RrTav4' },
      { icon: 'github', link: 'https://github.com/NLauncher' }
    ]
  },
})