import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Colours } from "../utils/constants"
import Header from "./header"
import Footer from "./footer"

import "typeface-open-sans"
import "typeface-roboto"
import "typeface-sansita"
import "./layout.css"

const PageWrapper = styled.div`
  padding: 2rem 0;
  background-color: ${Colours.bgColor};
  color: ${Colours.headerText};
`
const Body = styled.main`
  // subtract the static heights of the header and footer
  min-height: calc(100vh - 30.5rem);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          contactEmail
          linkedInProfile
          githubRepository
        }
      }
    }
  `)

  return (
    <PageWrapper>
      <Header siteMetaData={data.site.siteMetadata} />

      <Body>{children}</Body>

      <Footer siteMetaData={data.site.siteMetadata} />
    </PageWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
