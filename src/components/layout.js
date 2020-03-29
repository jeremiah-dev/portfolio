/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

import "typeface-open-sans"
import "typeface-roboto"
import "typeface-sansita"
import "./layout.css"


const PageWrapper = styled.div`
    background-color: rgba(255, 250, 250, 1);
    color: rgba(50, 50, 50, 0.8);
    padding: 0 20px;
`
const Body = styled.main`
    // subtract the static heights of the header and footer
    min-height: calc(100vh - 19rem);
    margin: auto;
    max-width: 769px;
    text-align: center;
    padding-top: 20px;
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author,
          contactEmail,
          linkedInProfile,
          githubRepository
        }
      }
    }
  `)

  return (
      <PageWrapper>
          <Header siteMetaData={data.site.siteMetadata} />

          <Body>
              {children}
          </Body>

          <Footer siteMetaData={data.site.siteMetadata} />
      </PageWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
