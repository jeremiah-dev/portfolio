import React from "react"
import styled, { css } from "styled-components"
import { Section } from "../components/styles"

export const ProjectSummaryWrapper = styled(Section)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 0;
`
export const ProjectSummaryContent = styled.div`
  padding: 0 20px;

  ${props =>
    props.column &&
    css`
      display: flex;
      flex-direction: column;
    `}
`
export const ProjectSummaryColumn = styled.div`
  margin-bottom: 2rem;
`
