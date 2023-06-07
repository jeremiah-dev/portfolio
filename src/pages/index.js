import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectAboutMe from "../modules/project-about-me"
import ProjectAurora from "../modules/project-aurora"
import ProjectWtSS from "../modules/project-WtSS"

const Project = styled.article`
  //padding: 60px 0;
`
const Divider = styled.hr`
  width: 50%;
  margin: 40px auto;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Jeremiah Walter - Web & Game Developer"
        image={data.SocialMediaPreview.childImageSharp.fixed}
      />
      
      <Project>
        <ProjectAboutMe />
      </Project>

      <Divider />

      <Project>
        <ProjectWtSS />
      </Project>

      <Divider />

      <Project>
        <ProjectAurora />
      </Project>

      <Divider />
    </Layout>
  )
}

export const query = graphql`
  query {
    SocialMediaPreview: file(relativePath: { eq: "og-image.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200, height: 630)
      }
    }
  }
`

export default IndexPage
