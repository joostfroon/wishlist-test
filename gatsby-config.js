/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: 'Wishlist test',
    siteUrl: 'https://www.Wishlist-test.tld',
  },
  plugins: [
    'gatsby-plugin-styled-components', 
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Overpass',
              variants: ['400', '700'],
              subsets: ['latin'],
              fontDisplay: 'swap',
            },
          ],
        },
      },
    },
  ]
};
