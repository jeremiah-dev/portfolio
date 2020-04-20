import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO
      title="404: Not found"
      image={data.SocialMediaPreview.childImageSharp.fixed}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const query = graphql`
  query {
    SocialMediaPreview: file(relativePath: { eq: "images/og-image.png" }) {
      childImageSharp {
        fixed(width: 1200, height: 630, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default NotFoundPage
