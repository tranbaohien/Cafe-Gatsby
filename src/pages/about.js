import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About Us" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid}
     title="About us" styleClass="about-background"/>
    <Info/>
  </Layout>
);

export default AboutPage;
export const query = graphql`
  {
    img: file(relativePath: {eq:"about-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`;