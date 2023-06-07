import React from "react"
import styled, { css } from "styled-components"
import { Responsive } from "../utils/constants"

const StyledImageWrapper = styled.div`
  border: 4px solid white;
  border-radius: 4px;
  background-color: white;
  vertical-align: middle;
  margin: 30px -20px 0 -20px;
  width: initial;

  ${props =>
    props.shadowColour &&
    css`
      box-shadow: 0 0 15px 10px ${props.shadowColour},
        0 0 5px 1px ${props.shadowColour}, 0 0 9px 5px ${props.shadowColour};
    `};

  @media (min-width: ${Responsive.med.minWidth}px) {
    margin: ${props => props.margin || 0}%;

    ${props =>
      props.width &&
      css`
        width: ${props => props.width}%;
      `};

    ${props =>
      props.display &&
      css`
        display: ${props.display};
      `};

    ${props =>
      props.top &&
      css`
        top: ${props.top};
      `};
  }
`

const StyledContent = styled.div`
  vertical-align: middle;
  text-align: ${props => (props.align ? "left" : "center")};
  width: initial;
  margin: 40px 0;

  @media (min-width: ${Responsive.med.minWidth}px) {
    display: ${props => props.display};
    margin: ${props => props.margin || 0}%;

    ${props =>
      props.width &&
      css`
        width: ${props => props.width}%;
      `};
  }
`

export const OffsetWrapper = styled.div`
  @media (min-width: ${Responsive.med.minWidth}px) {
    ${props =>
      props.widthAdjustment &&
      css`
        margin: 0 -${props.widthAdjustment};
      `}
  }
`

export const Offset = styled(StyledImageWrapper)`
  position: relative;

  @media (min-width: ${Responsive.med.minWidth}px) {
    display: inline-block;
    z-index: 50;

    ${props =>
      props.right &&
      css`
        left: -30px;
        top: -15px;
        //margin-right: 30px;
        z-index: 0;
      `}

    ${props =>
      props.left &&
      css`
        left: 30px;
        top: -15px;
        //margin-left: 30px;
        z-index: 0;
      `}
  }
`

const ContentImageBlock = ({
  image,
  width,
  align,
  shadowColour,
  margin,
  children,
}) => {
  if (!image) return <></>

  const displayType = width && width < 3 ? "inline-block" : "block"
  const marginWidth = margin || 1
  const imageWidth = width && width < 3 ? (width / 3) * 100 : 100
  const textWidth = width && width < 3 ? ((3 - width) / 3) * 100 : 100

  if (align && align === "right") {
    return (
      <div>
        <StyledContent
          display={displayType}
          width={textWidth - marginWidth * 2}
          align={align}
          margin={marginWidth}
        >
          {children}
        </StyledContent>
        <StyledImageWrapper
          display={displayType}
          width={imageWidth - marginWidth * 2}
          align={align}
          margin={marginWidth}
          shadowColour={shadowColour}
        >
          {image}
        </StyledImageWrapper>
      </div>
    )
  }

  // else if (image is left-aligned)
  return (
    <div>
      <StyledImageWrapper
        display={displayType}
        width={imageWidth - marginWidth * 2}
        align={align}
        margin={marginWidth}
        shadowColour={shadowColour}
      >
        {image}
      </StyledImageWrapper>
      <StyledContent
        display={displayType}
        align={align}
        width={textWidth - marginWidth * 2}
        margin={marginWidth}
      >
        {children}
      </StyledContent>
    </div>
  )
}

export { StyledImageWrapper, StyledContent, ContentImageBlock }
