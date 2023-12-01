import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cronica IT&C',
  tagline: 'Arhiva de fișiere binare',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cronica-it.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/arhiva/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cronica-it', // Usually your GitHub org/user name.
  projectName: 'arhiva', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro'],
  },

  plugins: [
  ],
  presets: [
    [
      'classic',
      {
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Cronica IT&C - Arhiva de fișiere binare',
      logo: {
        alt: 'Felix_C-256',
        src: 'img/Felix_C-256_computer.jpg',
      },
      items: [
        // {to: '/events', label: 'Evenimente', position: 'left'},
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          label: 'Despre',
          to: '/despre',
          position: 'right'
        },
        {
          label: 'Evenimente',
          href: 'https://cronica-it.github.io/preview/',
          position: 'right',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/cronica-it/arhiva',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cronica IT&C. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
