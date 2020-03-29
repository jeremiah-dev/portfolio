import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    font-size: 0.6rem;
    height: 3rem;
`
const Link = styled.a`
    text-decoration: none;
    &:visited { 
        color: inherit; 
    }
`


const Footer = ({ siteMetaData }) => (
    <StyledFooter>
        <span>{'\u00A9'} Copyright {new Date().getFullYear()}</span>
        {siteMetaData.title && siteMetaData.author &&
            <span>, <Link target="blank" href={`https://twitter.com/${siteMetaData.author}`}>{siteMetaData.title}</Link></span>
        }
    </StyledFooter>
)

Footer.propTypes = {
    siteMetaData: PropTypes.object,
}

Footer.defaultProps = {
    siteMetaData: {},
}

export default Footer
