import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NostalgiaLauncher",
  description: "Minecraft PE Alpha versions launcher for Android and Windows",
  base: '/',

  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      {
        text: "Installation",
        activeMatch: '/installation/',
        items: [
          { text: "Mobile", link: "/installation/mobile" },
          { text: "Desktop", link: "/installation/desktop" }
        ]
      },
      {
        text: "Docs",
        activeMatch: '/docs/',
        items: [
          {
            text: "NostalgiaLauncher Desktop",
            items: [
              { text: "Custom versions list source", link: "/docs/custom-versions-list-source" },
              { text: "Custom executable for versions", link: "/docs/custom-executable-for-versions" }
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
            { text: 'Mobile', link: '/installation/mobile' },
            { text: 'Desktop', link: '/installation/desktop' }
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
                { text: 'Custom versions list source', link: '/docs/custom-versions-list-source' },
                { text: 'Custom executable for versions', link: '/docs/custom-executable-for-versions' }
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
      message: '© LegacyMinecraftPE 2023-2025',
      copyright: 'This website is not affiliated with Mojang, Microsoft, or any other entity'
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/4fv4RrTav4' },
      { icon: 'github', link: 'https://github.com/NLauncher' }
    ]
  },
})