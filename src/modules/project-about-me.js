import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

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

const ProjectAboutMe = () => {
  return (
    <>
      <Section>
        <Heading centered>Hello and welcome to my portfolio!</Heading>
        <Text></Text>
      </Section>
    </>
  )
}

export default ProjectAboutMe
