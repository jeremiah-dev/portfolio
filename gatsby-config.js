module.exports = {
  siteMetadata: {
    title: `Jeremiah Walter`,
    description: `Web Development Portfolio`,
    author: `@_Walt3r`,
    contactEmail: `jeremiahwalter.dev@gmail.com`,
    linkedInProfile: `https://www.linkedin.com/in/j-walter`,
    githubRepository: `https://github.com/jeremiah-dev/portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`
  ],
}
