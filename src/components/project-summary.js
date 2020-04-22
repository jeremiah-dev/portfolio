import React from "react"
import styled, { css } from "styled-components"
import { Section } from "../components/styles"
import { Responsive } from "../utils/constants"

export const ProjectSummaryWrapper = styled(Section)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 0;
  flex-direction: column;

  @media (min-width: ${Responsive.med.minWidth}px) {
    flex-direction: row;
  }
`

export const ProjectSummaryContent = styled.div`
  padding: 0;
  margin-bottom: 2rem;

  ${props =>
    props.column &&
    css`
      display: flex;
      flex-direction: column;
    `}

    @media (min-width: ${Responsive.med.minWidth}px) {
        padding: 0 20px;
    }
`

export const ProjectSummaryColumn = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`
