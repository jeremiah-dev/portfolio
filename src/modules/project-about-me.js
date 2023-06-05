import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { 
  Section, 
  Heading, 
  StyledLink, 
  Text, 
} from "../components/styles"
import { Responsive } from "../utils/constants"

const Button = styled.a`
  font-size: 1rem;
  font-weight: normal;
  border-radius: 3px;
  color: black;
  padding: ${props => (props.padded ? "6px 12px" : "4px 6px")};
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
const ForewordSection = styled(Section)`
  text-align: center;
  font-size: 0.7rem;
  padding-top: 0;
  padding-bottom: 0;

  p { 
    margin: 0;
  }

  @media (min-width: ${Responsive.med.minWidth}px) {
    padding-top: 0;
    padding-bottom: 0;
    width: 400px;
  }

  @media (min-width: ${Responsive.lrg.minWidth}px) {
    padding-top: 0;
    padding-bottom: 0;
    width: 512px;
  }
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
      <ForewordSection>
        <Text>
          In recognition of the deep history and culture of this Island,
          I would like to acknowledge the Muwinina people, the traditional 
          owners of the Land upon which I reside. I acknowledge and pay
          my respects to all Tasmanian Aboriginal Communities; all
          of whom have survived invasion and dispossession, and
          continue to maintain their identity and culture.
        </Text>
      </ForewordSection>

      <Section bgColor="white" large>
        <Heading>Hi, hello! 👋</Heading>
        <Text>
          The name's Jeremiah (he/him), but most people call me Jez. 
          Welcome to my portfolio!
        </Text>
        <br/>
        <Heading>I suppose I should explain a few things.</Heading>
        <Text>
          First of all, I hate all this 'I excel at Excel' stuff. 
          Take a look at my <StyledLink href="https://www.linkedin.com/in/j-walter/" target="blank">LinkedIn profile</StyledLink> if you want all that professional self-agrandizement.
        </Text>
        <Text>
          Secondly, this is a constantly evolving website, written from scratch.
          If you love or hate something about it - tell me! 
          Maybe I'll change things based on your feedback. Buuuut, maybe I won't.
        </Text>
        <Text>
          Finally, I hope this portfolio gives you an idea of my personality and what I enjoy working on.  
        </Text>
        <Text>
          Please send me a message if you'd like to talk! 
          I will always accept unsolicited compliments and chats about my special interests.
        </Text>
        <Text margin="2rem 0 0 0" centered>
          <Button padded href={`mailto:${data.site.siteMetadata.contactEmail}`} target="blank">
           📧 📭
          </Button>
        </Text>
      </Section>
    </>
  )
}

export default ProjectAboutMe
