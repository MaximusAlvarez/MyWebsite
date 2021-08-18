module.exports = {
  siteMetadata: {
    siteUrl: 'https://nikhilrajesh.com',
    title: 'My Portfolio Site'
  },
  plugins: ['gatsby-plugin-preact',
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'NrsBcK_aUlS4E94CggyFbNh3F0_rov3AIvEsOyLTsmo',
        spaceId: 'arnfxlctouys'
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-204906783-1'
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
}
