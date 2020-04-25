import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import { StyledLink, Text, Section } from "../components/styles"
import { Colours } from "../utils/constants"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  min-height: 3rem;
`

const ExternalLinks = styled(Section)`
  padding: 0 0 1rem 0;
  display: flex;
  justify-content: center;
`
const IconLink = styled.a`
  text-decoration: none;
  padding: 0 5px;
  margin: 5px;
  color: rgba(50, 50, 50, 0.8);
  font-size: 2rem;
  transition-property: color;
  transition-duration: 0.4s;

  &:hover {
    color: ${Colours.primary};
  }
`

const Footer = ({ siteMetaData }) => {
  return (
    <>
      <StyledFooter>
        <ExternalLinks>
          <IconLink href={`mailto:${siteMetaData.contactEmail}`} target="blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </IconLink>
          {siteMetaData.author && (
            <IconLink
              href={`https://twitter.com/${siteMetaData.author}`}
              target="blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </IconLink>
          )}
          {siteMetaData.linkedInProfile && (
            <IconLink href={siteMetaData.linkedInProfile} target="blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLink>
          )}
          {siteMetaData.githubRepository && (
            <IconLink href={`${siteMetaData.githubRepository}`} target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </IconLink>
          )}
        </ExternalLinks>
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
        <Text centered style={{}}>
          Aurora project images - {"\u00A9"} Copyright{" "}
          {new Date().getFullYear()}, Aurora Energy Pty Ltd.
        </Text>
      </StyledFooter>
    </>
  )
}

Footer.propTypes = {
  siteMetaData: PropTypes.object,
}

Footer.defaultProps = {
  siteMetaData: {},
}

export default Footer
