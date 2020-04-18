import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StyledLink } from "./styles"

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  font-size: 0.6rem;
  height: 3rem;
`

const Footer = ({ siteMetaData }) => (
  <StyledFooter>
    <span>
      {"\u00A9"} Copyright {new Date().getFullYear()}
    </span>
    {siteMetaData.title && siteMetaData.author && (
      <span>
        ,{" "}
        <StyledLink
          target="blank"
          href={`https://twitter.com/${siteMetaData.author}`}
        >
          {siteMetaData.title}
        </StyledLink>
      </span>
    )}
  </StyledFooter>
)

Footer.propTypes = {
  siteMetaData: PropTypes.object,
}

Footer.defaultProps = {
  siteMetaData: {},
}

export default Footer
