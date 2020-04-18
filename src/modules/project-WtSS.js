import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

import SnowCreationVideoWebM from "../assets/videos/snow-creation.webm"
import SnowCreationVideoMp4 from "../assets/videos/snow-creation.mp4"

import {
  StyledImageWrapper,
  StyledImage,
  StyledContent,
  ContentImageBlock,
} from "../components/image-block"
import {
  Section,
  Heading,
  StyledLink,
  Text,
  Caption,
  StyledList,
  StyledListItem,
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

const SnowCreationVideo = () => (
  <video autoPlay loop playsInline style={{ width: "100%", display: "block" }}>
    <source src={SnowCreationVideoWebM} type="video/webm" />
    <source src={SnowCreationVideoMp4} type="video/mp4" />
  </video>
)

const ProjectWtSS = () => {
  const data = useStaticQuery(graphql`
    query {
      WtSSimg1: file(relativePath: { eq: "images/creepy-snowforest.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WtSSimg2: file(relativePath: { eq: "images/dialogue.png" }) {
        childImageSharp {
          fluid(maxWidth: 345, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WtSSimg4: file(
        relativePath: { eq: "images/overlooking-destroyed-village.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 345, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WtSSimg5: file(relativePath: { eq: "images/medium-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 345, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WtSSimg6: file(relativePath: { eq: "images/medium-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 345, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WtSSimg7: file(relativePath: { eq: "images/portrait.png" }) {
        childImageSharp {
          fluid(maxWidth: 345, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WtSSimg8: file(relativePath: { eq: "images/snow-meshes.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WtSSimg9: file(relativePath: { eq: "images/snow-meshes-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // minus the default StyledImage margin
  const colWidth = (1 / 3) * 100 - 3

  return (
    <>
      <ProjectSummaryWrapper>
        <ProjectSummaryContent column>
          <ProjectSummaryColumn>
            <Heading>Client / Project(s)</Heading>
            <StyledLink href="http://myriadgamesstudio.com/" target="blank">
              Myriad Games Studio
            </StyledLink>
            <Text>Where the Snow Settles</Text>
          </ProjectSummaryColumn>
          <ProjectSummaryColumn>
            <Heading>Role</Heading>
            <Text>Lead Programmer</Text>
            <Text>Script Writer</Text>
          </ProjectSummaryColumn>
        </ProjectSummaryContent>

        <ProjectSummaryContent>
          <Heading>More Info</Heading>
          <Text>
            <StyledLink href="https://wherethesnowsettles.com/" target="blank">
              Game website
            </StyledLink>
          </Text>
          <Text>
            <StyledLink
              href="http://myriadgamesstudio.com/press/sheet.php?p=where_the_snow_settles"
              target="blank"
            >
              Presskit()
            </StyledLink>
          </Text>
        </ProjectSummaryContent>

        <ProjectSummaryContent>
          <Heading>Technology</Heading>
          <Text>Unity</Text>
          <Text>C#</Text>
          <Text>Cinemachine</Text>
          <Text>Yarn / Yarn Spinner</Text>
          <Text>FMOD</Text>
        </ProjectSummaryContent>
      </ProjectSummaryWrapper>

      <Section>
        <StyledImageWrapper shadowColour={"rgba(181, 198, 207, 0.3)"}>
          <StyledImage fluid={data.WtSSimg1.childImageSharp.fluid} />
        </StyledImageWrapper>
        <Caption>All in-engine images are a work in progress.</Caption>
      </Section>

      <Section>
        <Heading centered>A Heartfelt Tale</Heading>
        <Text>
          Where the Snow Settles is a game about loss, growth, and the
          supernatural. As the world around her crumbles, Aurelia searches for
          her sister, unraveling mysteries and wonder along the way. This debut
          from Myriad Games Studio is a moving narrative title arriving on PC
          and Xbox in 2020.
        </Text>
      </Section>

      <Section>
        <div style={{ paddingTop: "15px" }}>
          <Offset
            style={{ top: "0" }}
            width={colWidth}
            left
            shadowColour={"rgba(45, 52, 75, 0.15)"}
          >
            <StyledImage fluid={data.WtSSimg5.childImageSharp.fluid} />
          </Offset>
          <Offset
            style={{ top: "-15px" }}
            width={colWidth}
            shadowColour={"rgba(200,200,200, 0.15)"}
          >
            <StyledImage fluid={data.WtSSimg6.childImageSharp.fluid} />
          </Offset>
          <Offset
            style={{ top: "0px" }}
            width={colWidth}
            right
            shadowColour={"rgba(45, 52, 75, 0.15)"}
          >
            <StyledImage fluid={data.WtSSimg7.childImageSharp.fluid} />
          </Offset>
          <Caption>
            Setup of a basic dialogue trigger. Includes triggered camera change,
            UI prompt and a dynamic (pooled) dialogue popup.
          </Caption>
        </div>
      </Section>

      <Section large bgColor="white">
        <Heading centered>My Work</Heading>
        <Text>
          I am responsible for the overall architecture of the game, as well as;
          camera scripting, managing test and demo builds (such as the PAX
          Melbourne build!), writing technical documentation, and mentoring
          junior developers on the team.
        </Text>
        <Text>I have also created the following:</Text>
        <StyledList>
          <StyledListItem>
            high-level scene manager, to allow for smooth transitions and
            multi-scene configuration,
          </StyledListItem>
          <StyledListItem>
            flexible dialogue and interactable system utilising{" "}
            <StyledLink href="https://yarnspinner.dev/" target="blank">
              Yarn Spinner
            </StyledLink>
            ,
          </StyledListItem>
          <StyledListItem>
            player states using facades and dependency injection (
            <StyledLink
              href="https://github.com/modesttree/Zenject"
              target="blank"
            >
              Zenject
            </StyledLink>
            ), and driven by ScriptableObjects,
          </StyledListItem>
          <StyledListItem>various Unity editor tools, and</StyledListItem>
          <StyledListItem>all of the game dialogue!</StyledListItem>
        </StyledList>
      </Section>

      <Section style={{ paddingBottom: "10px" }}>
        <Heading centered>An Example Tool: Snow Mesh Generator</Heading>
        <Text>
          In collaboration with our Technical Artist (
          <StyledLink href="https://twitter.com/andrew_mendlik" target="blank">
            Andrew Mendlik
          </StyledLink>
          ), this tool was created to allow level editors to quickly add or edit
          snow-drifts throughout a scene. Here's a high-level overview of how
          the tool is used:
        </Text>
        <StyledList>
          <StyledListItem>
            Flat (snow) mesh is set to match terrain height on all vertices.
          </StyledListItem>
          <StyledListItem>
            Level Editor manually paints any modifications to snow mesh, raising
            piles of snow.
          </StyledListItem>
        </StyledList>
      </Section>

      <Section>
        <ContentImageBlock
          width={1.5}
          src={data.WtSSimg8.childImageSharp.fluid}
          shadowColour={"rgba(181, 198, 207, 0.3)"}
          align="left"
        >
          <Heading style={{ paddingLeft: "10px" }}>
            Generating Colliders
          </Heading>
          <StyledList>
            <StyledListItem>
              Each snow vertex is compared to a terrain position. If above a
              threshold, it's added to a prospective new mesh list.
            </StyledListItem>
            <StyledListItem>
              All neighbouring terrain vertices are checked and added to list if
              above threshold.
            </StyledListItem>
            <StyledListItem>
              Once no more neighbouring vertices are eligible, the mesh is
              created and the search for any other valid snow continues, in a
              recursive fashion.
            </StyledListItem>
          </StyledList>
        </ContentImageBlock>
      </Section>

      <Section>
        <ContentImageBlock
          width={1.5}
          src={data.WtSSimg9.childImageSharp.fluid}
          shadowColour={"rgba(181, 198, 207, 0.3)"}
          align="right"
        >
          <Heading style={{ paddingLeft: "10px" }}>
            Benefits of This Approach
          </Heading>
          <StyledList>
            <StyledListItem>
              Physics recalculations are avoided. Mesh is not deformed when snow
              is sinking into the ground.
            </StyledListItem>
            <StyledListItem>
              Meshes can be optimised using a mesh simplify tool, removing inner
              verts/tris.
            </StyledListItem>
            <StyledListItem>
              Fast and easy for editors to repaint snow and generate new trigger
              volumes.
            </StyledListItem>
          </StyledList>
        </ContentImageBlock>
      </Section>

      <Section style={{ paddingTop: "10px" }}>
        <Heading>The Final Prototype</Heading>
        <Text style={{ marginBottom: "2rem" }}>
          Here's the result, in combination with Andrew's shader and render
          texture setup.
        </Text>
        <StyledImageWrapper shadowColour={"rgba(181, 198, 207, 0.3)"}>
          <SnowCreationVideo />
        </StyledImageWrapper>
        <Caption>Now we can see where the (prototype) snow settles.</Caption>
      </Section>
    </>
  )
}

export default ProjectWtSS
