import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

import {
  StyledImageWrapper,
  StyledImage,
  StyledContent,
} from "../components/image-block"
import {
  Section,
  Heading,
  StyledLink,
  Text,
  Caption,
} from "../components/styles"
import {
  ProjectSummaryWrapper,
  ProjectSummaryContent,
  ProjectSummaryColumn,
} from "../components/project-summary"

const Offset = styled(StyledImageWrapper)`
  position: relative;
  display: inline-block;
  z-index: 50;

  ${props =>
    props.right &&
    css`
      left: -30px;
      top: -15px;
      margin-right: 30px;
      z-index: 0;
    `}

  ${props =>
    props.left &&
    css`
      left: 30px;
      top: -15px;
      margin-left: 30px;
      z-index: 0;
    `}
`

const ProjectAurora = () => {
  const data = useStaticQuery(graphql`
    query {
      BillPrediction: file(relativePath: { eq: "AuroraBillPrediction.png" }) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      UsageMobileSMB: file(relativePath: { eq: "AuroraUsageMobileSMB.png" }) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HomeMobile: file(relativePath: { eq: "AuroraHomePageMobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // minus the default StyledImage margin
  const col3Width = (1 / 3) * 100 - 3

  return (
    <>
      <ProjectSummaryWrapper>
        <ProjectSummaryContent column>
          <ProjectSummaryColumn>
            <Heading>Client / Project(s)</Heading>
            <StyledLink href="https://www.auroraenergy.com.au/" target="blank">
              Aurora Energy
            </StyledLink>
            <Text>Aurora+ projects:</Text>
            <Text>Solar, API Broker, SMB product</Text>
          </ProjectSummaryColumn>
          <ProjectSummaryColumn>
            <Heading>Role</Heading>
            <Text>Technical Lead</Text>
          </ProjectSummaryColumn>
        </ProjectSummaryContent>

        <ProjectSummaryContent>
          <Heading>More Info</Heading>
          <Text>
            <StyledLink
              href="https://app-drupweb-prod.azurewebsites.net/aurora-plus/join-aurora-plus"
              target="blank"
            >
              Aurora+ website
            </StyledLink>
          </Text>
          <Text>
            <StyledLink href="https://vimeo.com/298492549" target="blank">
              Marketing video
            </StyledLink>
          </Text>
        </ProjectSummaryContent>

        <ProjectSummaryContent>
          <Heading>Technology</Heading>
          <Text>React / React Native</Text>
          <Text>C# / .Net MVC</Text>
          <Text>TeamCity</Text>
          <Text>Semantic UI</Text>
          <Text>D3.js</Text>
        </ProjectSummaryContent>
      </ProjectSummaryWrapper>

      <Section>
        <Offset width={col3Width} left>
          <StyledImage fluid={data.HomeMobile.childImageSharp.fluid} />
        </Offset>
        <Offset width={col3Width}>
          <StyledImage fluid={data.BillPrediction.childImageSharp.fluid} />
        </Offset>
        <Offset width={col3Width} right>
          <StyledImage fluid={data.UsageMobileSMB.childImageSharp.fluid} />
        </Offset>
        <Caption>
          Designs by{" "}
          <StyledLink href="http://www.nickrudenno.com/" target="blank">
            Nick Rudenno
          </StyledLink>
          .{" "}
          <span>
            {"\u00A9"} Copyright {new Date().getFullYear()} Aurora Energy Pty
            Ltd.
          </span>
        </Caption>
      </Section>

      <Section>
        <Heading centered>API Broker</Heading>
        <Text>
          Aurora have introduced a new backend system for eventually storing all
          of their 270,000+ customers, along with their billing and electricity
          usage history.
        </Text>
        <Text>
          The Broker is a new API layer we introduced to enable queries to both
          old and new system with the one Azure AD identity, mapping data from
          both to a common, standardised format.
        </Text>
      </Section>

      <Section>
        <Heading centered>SMB Product</Heading>
        <Text>
          <i>Currently in development.</i>
        </Text>
        <Text>
          Previously, only residential customers have been able to use the
          Aurora+ App. This project introduces a new product, aimed at small and
          medium business customers. This will allow eligible customers to view
          their properties' electricity usage, pay their bills, and switch
          between all of their residential and business accounts and premises.
        </Text>
        <Text>
          A number of new tools and services will also be added, such as
          post-pay billing, bill prediction, business-specific tariffs, and
          business-themed styling.
        </Text>
      </Section>
    </>
  )
}

export default ProjectAurora
