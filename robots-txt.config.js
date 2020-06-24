module.exports = {
  host: 'http://www.wilmat.com',
  sitemap: 'https://www.example.com/sitemap.xml',
  env: {
    development: {
      policy: [{ userAgent: '*', disallow: ['/'] }],
    },
    production: {
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
};
