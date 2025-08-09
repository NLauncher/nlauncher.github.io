import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NostalgiaLauncher",
  description: "Minecraft PE Alpha versions launcher for Android and Windows",

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
          { text: "Custom versions list source", link: "/docs/custom-versions-list-source" },
          { text: "Custom executable for versions", link: "/docs/custom-executable-for-versions" }
        ]
      }
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
            { text: 'Custom versions list source', link: '/docs/custom-versions-list-source' },
            { text: 'Custom executable for versions', link: '/docs/custom-executable-for-versions' }
          ]
        }
      ]
    },

    footer: {
      message: '© LegacyMinecraftPE 2023-2025',
      copyright: 'This website is not affiliated with Mojang, Microsoft, or any other entity'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NLauncher' },
      { icon: 'discord', link: 'https://discord.gg/4fv4RrTav4' }
    ]

  },
})