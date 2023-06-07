import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Colours, Responsive } from "../utils/constants"
const StyledHeader = styled.header`
  padding: 2rem 0;
`
const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 0;
`
const Title = styled.h1`
  margin-bottom: 0;
  font-size: 3.25rem;
  ::selection {
    background: ${Colours.primary};
  }
`
const Characteristics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`
const Attribute = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  padding: 2px 4px;
  margin: 2px 4px;
  border-radius: 3px;
  color: black;
  background-color: ${Colours.primary};
`
const ExternalLinks = styled.div``
const IconLink = styled.a`
  text-decoration: none;
  padding: 0 5px;
  margin: 5px;
  color: rgba(50, 50, 50, 0.8);
  font-size: 1rem;
  transition-property: color;
  transition-duration: 0.4s;

  &:hover {
    color: ${Colours.primary};
  }
`
const SideMenu = styled.ul`
  position: fixed;
  top: 30px;
  right: 15px;
  text-align: right;
  list-style: none;
  font-size: 0.9rem;
  margin: 0 16px 0 0;
  z-index: 500;
  display: none;

  @media (min-width: ${Responsive.med.minWidth}px) {
    display: block;
  }
`
const MenuItem = styled.li`
  margin-bottom: 5px;

  a {
    color: ${Colours.headerText};

    &:active,
    &:visited {
      color: ${Colours.headerText};
    }
    &:hover {
      color: ${Colours.primary};
    }
  }
`
const Header = ({ siteMetaData }) => (
  <StyledHeader id="top-section">
    <nav>
      <SideMenu>
        <MenuItem>
          <a href="#top-section"><FontAwesomeIcon icon={faChevronUp} /></a>
        </MenuItem>
        <MenuItem>
          <a href="#project-wtss">Where The Snow Settles</a>
        </MenuItem>
        <MenuItem>
          <a href="#project-aurora">Aurora</a>
        </MenuItem>
      </SideMenu>
    </nav>
    <Content>
      <Title>{siteMetaData.title}</Title>

      <Characteristics>
        <Attribute>Reliable</Attribute>
        <Attribute>Approachable</Attribute>
        <Attribute>Persistent</Attribute>
      </Characteristics>

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
    </Content>
  </StyledHeader>
)

Header.propTypes = {
  siteMetaData: PropTypes.object,
}

Header.defaultProps = {
  siteMetaData: {},
}

export default Header
