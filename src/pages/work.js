import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WorkHero from '../components/work/workHero'
import WorkProjects from '../components/work/workProjects'

const WorkPage = () => (
  <Layout>
    <SEO title="Digital Innerprize" />
    <WorkHero />
    <WorkProjects />
  </Layout>
)

export default WorkPage
