import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://docs.clawoshq.com',
  integrations: [
    sitemap(),
    starlight({
      title: 'ClawOS Docs',
      description: 'Documentation for the ClawOS multi-skill AI platform.',
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
      },
      logo: {
        src: './src/assets/icon-192.png',
        alt: 'ClawOS',
      },
      customCss: [
        './src/styles/clawos-fonts.css',
        './src/styles/clawos-tokens.css',
        './src/styles/clawos-starlight.css',
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/orestes-garcia-martinez/clawos',
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Docs Home', link: '/' },
            { label: 'Getting Started', slug: 'getting-started/overview' },
            { label: 'FAQ', slug: 'reference/faq' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            {
              label: 'Shell vs Skill Mode',
              slug: 'core-concepts/shell-vs-skill-mode',
            },
            {
              label: 'Channels and Identity',
              slug: 'core-concepts/channels-and-identity',
            },
            { label: 'Security Model', slug: 'core-concepts/security-model' },
            { label: 'Shared Context', slug: 'core-concepts/shared-context' },
          ],
        },
        {
          label: 'Platform',
          items: [
            {
              label: 'Architecture Overview',
              slug: 'platform/architecture-overview',
            },
            { label: 'Channels', slug: 'platform/channels' },
            {
              label: 'Billing and Entitlements',
              slug: 'platform/billing-and-entitlements',
            },
            {
              label: 'Resume Data Policy',
              slug: 'platform/resume-data-policy',
            },
            {
              label: 'Security and Trust',
              slug: 'platform/security-and-trust',
            },
          ],
        },
        {
          label: 'Skills',
          items: [
            {
              label: 'CareerClaw',
              slug: 'skills/careerclaw/overview',
              badge: 'Live',
            },
            {
              label: 'ScrapeClaw',
              slug: 'skills/scrapeclaw/overview',
              badge: 'Planned',
            },
            {
              label: 'InvestClaw',
              slug: 'skills/investclaw/overview',
              badge: 'Planned',
            },
          ],
        },
        {
          label: 'API',
          collapsed: true,
          items: [
            { label: 'API Overview', slug: 'api/overview' },
            { label: 'Auth Model', slug: 'api/auth-model' },
            { label: 'Chat and SSE', slug: 'api/chat-and-sse' },
            { label: 'Billing Checkout', slug: 'api/billing-checkout' },
            { label: 'Billing Portal', slug: 'api/billing-portal' },
            { label: 'Billing Webhooks', slug: 'api/billing-webhooks' },
            { label: 'Error Model', slug: 'api/error-model' },
          ],
        },
        {
          label: 'Examples',
          collapsed: true,
          items: [
            { label: 'Web Channel', slug: 'examples/web-channel' },
            { label: 'Telegram Channel', slug: 'examples/telegram-channel' },
            {
              label: 'Fresh Job Briefing',
              slug: 'examples/fresh-job-briefing',
            },
            {
              label: 'Tracker Status Flow',
              slug: 'examples/tracker-status-flow',
            },
          ],
        },
        {
          label: 'Changelog',
          items: [{ label: 'Release Notes', slug: 'changelog' }],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:site_name', content: 'ClawOS Docs' },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#0A0F1E' },
        },
      ],
      lastUpdated: true,
      editLink: {
        baseUrl:
          'https://github.com/orestes-garcia-martinez/clawos-docs/edit/main/',
      },
    }),
  ],
})
