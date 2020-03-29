import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngular, faReact, faMicrosoft, faJsSquare, faUnity } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


const primaryColor = 'rgb(227, 165, 180)'

const Text = styled.p`
    margin: ${props => props.margin || "0 0 0.5rem 0"};
    color: black;
`
const TechList = styled.ul`
    margin: auto;
    text-align: left;
    width: fit-content;
`
const TechItem = styled.li`
    color: black;
    text-decoration: none;
    list-style: none;
`
const StyledLink = styled.a`
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
const StyledIcon = styled(FontAwesomeIcon)`
    color: rgba(50,50,50,0.8);
    font-size: 1.3em;
    margin-right: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
    &:last-child {
        margin-bottom: 2px;
    }
`
const NavLink = styled(Link)`
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
const Button = styled.a`
    font-size: 1rem;
    font-weight: normal;
    border-radius: 3px;
    color: black;
    background-color: ${primaryColor};
    padding: 4px 6px;
    text-decoration: none;
    margin-top: 5px;

    background-color: transparent;
    box-shadow: 3px 5px 0px rgba(0,0,0,0.2);
    border: 1px solid rgba(50,50,50,0.8);
`
const IconInButton = styled(StyledIcon)`
    vertical-align: middle;
`
const Section = styled.section`
    margin-bottom: 3rem;
`


const IndexPage = ({ data }) => {

    const timeDifference = new Date().getTime() - new Date(2013, 11, 1).getTime();
    const days = timeDifference / (1000 * 3600 * 24);
    const years = days / 365;

    return (
        <Layout>
            <SEO title="Home" />

            <Section>
                <Text>I'm a full-stack web developer of {Math.floor(years)}+ years.</Text>
                <Text>I also <StyledLink href="http://myriadgamesstudio.com/" target="blank">make games</StyledLink>.</Text>
            </Section>

            <Section>
                <Text margin="0 0 1rem 0">The tech I work with:</Text>
                <TechList>
                    <TechItem><StyledIcon icon={faMicrosoft} /> C#</TechItem>
                    <TechItem><StyledIcon icon={faJsSquare} /> Javascript</TechItem>
                    <TechItem><StyledIcon icon={faReact} /> React</TechItem>
                    <TechItem><StyledIcon icon={faAngular} /> Angular</TechItem>
                    <TechItem><StyledIcon icon={faMicrosoft} /> ASP.NET MVC</TechItem>
                    <TechItem><StyledIcon icon={faUnity} /> Unity</TechItem>
                </TechList>
            </Section>

            <Section>
                <Text margin="0 0 1.4rem 0">Feel free to browse my <NavLink to="./projects" target="blank">latest projects</NavLink> or,</Text>
                <Button href={`mailto:${data.site.siteMetadata.contactEmail}`} target="blank">
                    <IconInButton icon={faEnvelope} />
                    message me
                </Button>
            </Section>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        contactEmail
      }
    }
  }
`


export default IndexPage
