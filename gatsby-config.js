module.exports = {
  siteMetadata: {
    title: `Jeremiah Walter`,
    description: `Senior Developer at RXP Group, Technical Lead at Myriad Games Studio`,
    author: `@_Walt3r`,
    siteUrl: `https://jeremiahwalter.com`,
    contactEmail: `jeremiahwalter.dev@gmail.com`,
    linkedInProfile: `https://www.linkedin.com/in/j-walter`,
    githubRepository: `https://github.com/jeremiah-dev`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/Avatar.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
