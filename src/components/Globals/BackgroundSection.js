import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({
    img,
    styleClass,
    title,
    children
}) => {
    return (
        <BackgroundImage className={styleClass} fluid={img}>
            <h1 className="title text-white text-uppercase
                text-center display-4 font-weight-bold">
                {title}
            </h1>
            {children}
        </BackgroundImage>
    )
}

export default BackgroundSection

BackgroundSection.defaultProps = {
    title: "Hien Tran's",
    styleClass: "default-background"
}
