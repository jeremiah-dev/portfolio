import styled, { css } from "styled-components"

import { Colours } from "../utils/constants"
import { LightenDarkenHexColor } from "../utils/color-functions"

export const Section = styled.section`
  margin: auto;
  padding: ${props => (props.large ? "40px 36px" : "40px 0")};
  width: ${props => (props.large ? "840px" : "768px")};

  ${props =>
    props.bgColor &&
    css`
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: ${props.bgColor};

      a {
        text-shadow: 1px 1px 0px ${props.bgColor}, 1px -1px ${props.bgColor},
          -1px 1px ${props.bgColor}, -1px -1px ${props.bgColor};
      }
    `}
`

export const StyledLink = styled.a`
  margin-bottom: 0.5em;
  font-style: italic;
  padding-bottom: 1px;
  text-decoration: none;
  display: inline-block;
  line-height: 0.85;
  text-shadow: 1px 1px 0px ${Colours.bgColor}, 1px -1px ${Colours.bgColor},
    -1px 1px ${Colours.bgColor}, -1px -1px ${Colours.bgColor};
  color: ${Colours.bodyText};
  border-bottom: 2px solid ${Colours.primary};

  &:visited {
    color: ${Colours.bodyText};
  }
  &:hover {
    color: ${LightenDarkenHexColor(Colours.primary, -30)};
  }
`

export const Text = styled.p`
  color: ${Colours.bodyText};
  margin: ${props => props.margin || "0 0 0.5rem 0"};
  text-align: ${props => (props.centered ? "center" : "inherit")};
`

export const Heading = styled.h2`
  font-size: 1rem;
  text-align: ${props => (props.centered ? "center" : "inherit")};
`

export const Caption = styled(Text)`
  text-align: center;
  padding-top: 1.5rem;
  font-size: 0.75em;
  font-style: italic;
`

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 0.5em;
  color: ${Colours.bodyText};
`
export const StyledListItem = styled.li`
  &:before {
    content: "\\2023";
    color: ${Colours.primary};
    margin-right: 0.5em;
    font-size: 1.3em;
    line-height: 1;
  }
`
