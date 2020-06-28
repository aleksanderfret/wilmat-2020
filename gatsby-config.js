module.exports = {
  siteMetadata: {
    name: 'Wilmat s.c.',
    author: 'Wilmat s.c.',
    city: 'Wrocław',
    postal: '51-114',
    address: 'ul. Obornicka 70',
    type: 'Company',
    email: 'biuro@wilmat.com.pl',
    siteUrl: 'http://www.wilmat.com.pl',
    phone: '+48 606 731 625',
    phone2: '+48 501 242 932',
    phone3: '+48 713 259 879',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      },
    },
    'gatsby-plugin-stylelint',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'yaml',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['300', '400', '700'],
            subsets: ['latin-ext'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Wilmat',
        short_name: 'Wilmat',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#006EB4',
        display: 'standalone',
        icon: 'src/images/icons/wilmat-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
