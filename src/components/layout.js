import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "typeface-open-sans"
import "typeface-roboto"
import "typeface-sansita"
import "./layout.css"

import { Colours, Responsive } from "../utils/constants"
import Header from "./header"
import Footer from "./footer"

const PageWrapper = styled.div`
  padding: 0 0 2rem 0;
  background-color: ${Colours.bgColor};
  color: ${Colours.headerText};

  @media (min-width: ${Responsive.med.minWidth}px) {
    padding: 2rem 0;
  }
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
