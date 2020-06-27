module.exports = {
  host: 'http://www.wilmat.com',
  sitemap: 'http://www.wilmat.com/sitemap.xml',
  env: {
    development: {
      policy: [{ userAgent: '*', disallow: ['/'] }],
    },
    production: {
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
};
