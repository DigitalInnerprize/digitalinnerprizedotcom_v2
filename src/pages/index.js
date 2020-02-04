import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from '../components/homeHero'
import HomeServices from '../components/homeServices'
import HomeCTA from '../components/homeCTA'
import RecentProjects from '../components/recentProjects'
import HomeAboutUs from '../components/homeAboutUs'

const IndexPage = () => (
  <Layout>
    <SEO title="Digital Innerprize" />
    <HomeHero />
    <HomeServices />
    <HomeCTA />
    <RecentProjects />
    <HomeAboutUs />
  </Layout>
)

export default IndexPage
