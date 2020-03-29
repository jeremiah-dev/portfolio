import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"


const primaryColor = 'rgb(227, 165, 180)'

const Text = styled.p`
    margin-bottom: 0.5rem;
    color: black;
`
const StyledLink = styled(Link)`
    padding: 2px;
    margin: 0 0.5em;
    text-decoration: none;
    font-style: italic;
    color: rgba(50,50,50,0.8);

    &:visited {
        color: rgba(50,50,50,0.8);
    }
    &:hover {
        color: ${primaryColor};
    }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />

        <Text>This page is coming soon!</Text>
        <Text><StyledLink to="/">Return Home.</StyledLink></Text>
    
  </Layout>
)

export default IndexPage
