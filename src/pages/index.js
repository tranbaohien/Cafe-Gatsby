import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid}/>
    <Info/>
    <Menu items={data.my}/>
  </Layout>
);

export default IndexPage;
export const query = graphql`
  {
    img: file(relativePath: {eq:"default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    my: allContentfulCoffeeItem {
      edges {
        node {
          id
          description {
            description
          }
          price
          title
          category
          image {
            fixed(width:50, height:50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }`;