import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHero from '../components/about/aboutHero'

const AboutPage = () => {
  
  return (
    <Layout>
      <SEO title="Digital Innerprize" />
      <AboutHero />
    </Layout>
  )
}

export default AboutPage;
