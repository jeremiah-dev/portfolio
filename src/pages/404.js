import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, Text, StyledLink, Heading } from "../components/styles"

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO
      title="404: Not found"
      image={data.SocialMediaPreview.childImageSharp.fixed}
    />
    <Section style={{ textAlign: "center" }}>
      <h1>PAGE NOT FOUND</h1>
      <Text>
        Return <StyledLink href="/">home</StyledLink>.
      </Text>
    </Section>
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
