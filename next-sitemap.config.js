module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://test_task.io',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-News',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
      },
    ],
  },
  priority: 0.7,
  changefreq: 'daily',
  exclude: ['/sitemap.xml'],
  generateIndexSitemap: true,
}
