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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // https://www.gatsbyjs.org/docs/add-a-manifest-file/#using-gatsby-plugin-manifest
      // better google results for progressive web apps:
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
