import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StyledLink, Text } from "./styles"

const StyledFooter = styled.footer`
  padding: 1rem 0;
  font-size: 0.75rem;
  height: 3rem;
`

const Footer = ({ siteMetaData }) => (
  <StyledFooter>
    <Text centered>
      {"\u00A9"} Copyright {new Date().getFullYear()}
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
    </Text>
  </StyledFooter>
)

Footer.propTypes = {
  siteMetaData: PropTypes.object,
}

Footer.defaultProps = {
  siteMetaData: {},
}

export default Footer
