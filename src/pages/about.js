import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutHero from '../components/about/aboutHero'
import AboutServices from '../components/about/aboutServices'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Digital Innerprize" />
      <AboutHero />
      <AboutServices />
    </Layout>
  )
}

export default AboutPage
