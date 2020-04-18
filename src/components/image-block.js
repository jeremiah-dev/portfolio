import React from "react"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

const StyledImageWrapper = styled.div`
  border: 4px solid white;
  border-radius: 4px;
  background-color: white;
  vertical-align: middle;
  margin: ${props => props.margin || 0}%;
  width: ${props => props.width || "initial"}%;

  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `};

  ${props =>
    props.shadowColour &&
    // shadowColour should be either black or the main image colour
    css`
      box-shadow: 0 0 15px 10px ${props.shadowColour},
        0 0 5px 1px ${props.shadowColour}, 0 0 9px 5px ${props.shadowColour};
    `};
`
const StyledImage = styled(Img)`
  border-radius: 4px;
`

const StyledContent = styled.div`
  vertical-align: middle;
  margin: ${props => props.margin || 0}%;
  display: ${props => props.display};
  text-align: ${props => (props.align ? "left" : "center")};
  width: ${props => props.width}%;
`

const ContentImageBlock = ({ src, width, align, shadowColour, children }) => {
  if (!src) return <></>

  const displayType = width && width < 3 ? "inline-block" : "block"
  const margin = 1
  const imageWidth = width && width < 3 ? (width / 3) * 100 : 100
  const textWidth = width && width < 3 ? ((3 - width) / 3) * 100 : 100

  if (align && align === "right") {
    return (
      <div>
        <StyledContent
          display={displayType}
          width={textWidth - margin * 2}
          align={align}
          margin={margin}
        >
          {children}
        </StyledContent>
        <StyledImageWrapper
          display={displayType}
          width={imageWidth - margin * 2}
          align={align}
          margin={margin}
          shadowColour={shadowColour}
        >
          <StyledImage fluid={src} />
        </StyledImageWrapper>
      </div>
    )
  }

  // else if (image is left-aligned)
  return (
    <div>
      <StyledImageWrapper
        display={displayType}
        width={imageWidth - margin * 2}
        align={align}
        margin={margin}
        shadowColour={shadowColour}
      >
        <StyledImage fluid={src} />
      </StyledImageWrapper>
      <StyledContent
        display={displayType}
        align={align}
        width={textWidth - margin * 2}
        margin={margin}
      >
        {children}
      </StyledContent>
    </div>
  )
}

export { StyledImageWrapper, StyledImage, StyledContent, ContentImageBlock }
