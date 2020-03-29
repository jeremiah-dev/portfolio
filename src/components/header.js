import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


const primaryColor = 'rgb(227, 165, 180)'

const StyledHeader = styled.header`
    min-height: 16rem;
    padding-bottom: 20px;
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
    background-color: ${primaryColor};
`

const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 20px 5%;
`
const NavLink = styled(Link)`
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

const ActiveLinkStyle = { color: primaryColor }

const ExternalLinks = styled.div``
const IconLink = styled.a`
    text-decoration: none;
    padding: 0 5px;
    margin: 5px;
    color: rgba(50,50,50,0.8);
    font-size: 2rem;
`


const Header = ({ siteMetaData }) => (
    <StyledHeader>
        <Navigation>
            <NavLink to="/" activeStyle={ActiveLinkStyle}>Home</NavLink>
            <NavLink to="/projects" activeStyle={ActiveLinkStyle}>Projects</NavLink>
        </Navigation>

        <Content>
            <Title>{siteMetaData.title}</Title>

            <Characteristics>
                <Attribute>Creator</Attribute>
                <Attribute>Developer</Attribute>
                <Attribute>Leader</Attribute>
            </Characteristics>

            <ExternalLinks>
                <IconLink href={`mailto:${siteMetaData.contactEmail}`} target="blank">
                    <FontAwesomeIcon icon={faEnvelope} />
                </IconLink>
                {siteMetaData.author &&
                    <IconLink href={`https://twitter.com/${siteMetaData.author}`} target="blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </IconLink>
                }
                {siteMetaData.linkedInProfile &&
                    <IconLink href={siteMetaData.linkedInProfile} target="blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </IconLink>
                }
                {siteMetaData.githubRepository &&
                    <IconLink href={`${siteMetaData.githubRepository}`} target="blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </IconLink>
                }
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
