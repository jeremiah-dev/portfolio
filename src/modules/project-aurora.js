import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Responsive } from "../utils/constants"

import {
  StyledImageWrapper,
  StyledImage,
  Offset,
  OffsetWrapper,
} from "../components/image-block"
import {
  Section,
  Heading,
  StyledLink,
  Text,
  Caption,
  DesktopOnly,
} from "../components/styles"
import {
  ProjectSummaryWrapper,
  ProjectSummaryContent,
  ProjectSummaryColumn,
} from "../components/project-summary"

const FloatingImageWrapper = styled(StyledImageWrapper)`
  @media (min-width: ${Responsive.med.minWidth}px) {
    position: absolute;
    top: 65px;
    right: 90px;
    width: 270px;
  }
`

const ProjectAurora = () => {
  const data = useStaticQuery(graphql`
    query {
      BillPrediction: file(
        relativePath: { eq: "images/AuroraBillPrediction.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      UsageMobileSMB: file(
        relativePath: { eq: "images/AuroraUsageMobileSMB.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HomeMobile: file(
        relativePath: { eq: "images/AuroraHomePageMobile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 256, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Usage: file(relativePath: { eq: "images/usage-medium.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      UsageMobile: file(relativePath: { eq: "images/usage-small.png" }) {
        childImageSharp {
          fluid(maxWidth: 270, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // minus the default StyledImage margin
  const containerAdjustment = 4
  const col3Width = (1 / 3) * 100 - (3 - containerAdjustment / 8)

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
          <Text>React</Text>
          <Text>C# / .Net MVC</Text>
          <Text>Web API 2</Text>
          <Text>Azure AD</Text>
          <Text>TeamCity</Text>
          <Text>Semantic UI</Text>
          <Text>D3.js</Text>
        </ProjectSummaryContent>
      </ProjectSummaryWrapper>

      <Section>
        <OffsetWrapper widthAdjustment={`${containerAdjustment}%`}>
          <Offset
            width={col3Width}
            left
            shadowColour={"rgba(27, 124, 188, 0.15)"}
            margin={1.25}
          >
            <StyledImage fluid={data.HomeMobile.childImageSharp.fluid} />
          </Offset>
          <Offset
            width={col3Width}
            shadowColour={"rgba(45, 52, 75, 0.15)"}
            margin={1.25}
          >
            <StyledImage fluid={data.BillPrediction.childImageSharp.fluid} />
          </Offset>
          <Offset
            width={col3Width}
            right
            shadowColour={"rgba(45, 52, 75, 0.15)"}
            margin={1.25}
          >
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
        </OffsetWrapper>
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
          their properties' electricity usage (from yearly, down to an hourly
          break-down), pay their bills, and switch between all of their
          residential and business accounts and premises.
        </Text>
        <Text>
          As part of this project, a number of new tools and services will also
          be added, such as post-pay billing, bill prediction, business-specific
          tariffs, and a business-themed style.
        </Text>
      </Section>

      <Section style={{ position: "relative" }}>
        <DesktopOnly>
          <StyledImageWrapper shadowColour={"rgba(26, 123, 187, 0.15)"}>
            <StyledImage fluid={data.Usage.childImageSharp.fluid} />
          </StyledImageWrapper>
        </DesktopOnly>
        <FloatingImageWrapper shadowColour={"rgba(0,0,0, 0.1)"}>
          <StyledImage fluid={data.UsageMobile.childImageSharp.fluid} />
        </FloatingImageWrapper>
        <Caption>
          <DesktopOnly>Desktop and mobile versions</DesktopOnly>. The Usage
          graph is dynamic, showing dollar, kilowatt or export (solar) views, in
          different time periods, such as yearly, or hourly. Popups also give
          more info on every facet of the displayed data.
          <span style={{ display: "block", marginTop: "3px" }}>
            {"\u00A9"} Copyright {new Date().getFullYear()} Aurora Energy Pty
            Ltd.
          </span>
        </Caption>
      </Section>

      <Section>
        <Heading centered>API Broker</Heading>
        <Text>
          Aurora recently introduced a new backend system for eventually storing
          all of their 270,000+ customers, along with all of their billing and
          electricity usage history.
        </Text>
        <Text>
          The 'Broker' is an API layer that we introduced to enable queries to
          both old and new system with the one Azure AD identity, mapping data
          from both to a common, standardised format. This work required no
          changes to the frontend, and allowed customers to transition to the
          new database solution with no interruption of service.
        </Text>
      </Section>
    </>
  )
}

export default ProjectAurora
