import styled, { css } from "styled-components"

import { Colours, Responsive } from "../utils/constants"
import { LightenDarkenHexColor } from "../utils/color-functions"

export const Section = styled.section`
  margin: auto;
  padding: 40px 30px;
  width: 100%;

  @media (min-width: ${Responsive.med.minWidth}px) {
    padding: ${props => (props.large ? "40px 36px" : "40px 0")};
    width: ${props =>
      props.large
        ? Responsive.med.container + 72 + "px"
        : Responsive.med.container + "px"};
  }

  @media (min-width: ${Responsive.lrg.minWidth}px) {
    padding: ${props => (props.large ? "40px 36px" : "40px 0")};
    width: ${props =>
      props.large
        ? Responsive.lrg.container + 72 + "px"
        : Responsive.lrg.container + "px"};
  }

  ${props =>
    props.bgColor &&
    css`
      margin-top: 40px;
      margin-bottom: 40px;
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

export const DesktopOnly = styled.span`
  display: none;
  @media (min-width: ${Responsive.med.minWidth}px) {
    display: initial;
  }
`
export const MobileOnly = styled.span`
  display: intiial;
  @media (min-width: ${Responsive.med.minWidth}px) {
    display: none;
  }
`
