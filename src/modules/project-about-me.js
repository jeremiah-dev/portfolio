import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { Section, Heading, StyledLink, Text } from "../components/styles"

const Button = styled.a`
  font-size: 1rem;
  font-weight: normal;
  border-radius: 3px;
  color: black;
  padding: 4px 6px;
  text-decoration: none;
  margin-top: 5px;
  background-color: transparent;
  box-shadow: 3px 5px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(50, 50, 50, 0.8);

  &:active {
    box-shadow: 3px 5px 0px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background-color: white;
    box-shadow: 3px 5px 0px rgba(197, 135, 150, 0.75);
  }
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: rgba(50, 50, 50, 0.8);
  font-size: 1.3em;
  margin-right: 4px;
  margin-bottom: 2px;
  vertical-align: middle;
  transition-property: color;
  transition-duration: 0.4s;

  &:last-child {
    margin-bottom: 2px;
  }
`
const IconInButton = styled(StyledIcon)`
  vertical-align: middle;
`

const ProjectAboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contactEmail
        }
      }
    }
  `)

  return (
    <>
      <Section bgColor="white" large>
        <Heading>Hello and welcome to my portfolio!</Heading>
        <Text>
          My name is Jeremiah, and I'm a relentless creator of all things
          digital. Whether it be making websites, mobile apps, games, digital
          prototypes, or web serials, I like to keep busy and <i>inspired</i>.
        </Text>
      </Section>

      <Section>
        <Heading>About Me</Heading>
        <Text>
          I'm currently working at{" "}
          <StyledLink href="https://rxpservices.com/" target="blank">
            RXP Services
          </StyledLink>{" "}
          as a Senior Full-stack Web Developer, and{" "}
          <StyledLink href="http://myriadgamesstudio.com/" target="blank">
            Myriad Games Studio
          </StyledLink>{" "}
          as the Lead Programmer.
        </Text>
        <Text>
          I've worked with clients such as; Helloworld Travel, Lendlease,
          Challenger, and Coca-Cola Amatil, providing a variety of data-driven
          web sites and services. The majority of my work has been remote, with
          only my most recent work for Aurora Energy being local and on-site.
        </Text>
        <Text>
          Please take a look through my latest projects below, or the{" "}
          <StyledLink
            href="https://github.com/jeremiah-dev/portfolio"
            target="blank"
          >
            source code
          </StyledLink>{" "}
          for this site, and let me know if you would like to have a chat!
        </Text>
        <Text margin="2rem 0 0 0" centered>
          <Button
            href={`mailto:${data.site.siteMetadata.contactEmail}`}
            target="blank"
          >
            <IconInButton icon={faEnvelope} />
            message me
          </Button>
        </Text>
      </Section>
    </>
  )
}

export default ProjectAboutMe
