import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeHero from '../components/home/homeHero';
import HomeServices from '../components/home/homeServices';
import RecentProjects from '../components/home/recentProjects';
import HomeAboutUs from '../components/home/homeAboutUs';

const IndexPage = () => (
    <Layout>
        <SEO title="Digital Innerprize" />
        <HomeHero />
        <HomeServices />
        <RecentProjects />
        <HomeAboutUs />
    </Layout>
);

export default IndexPage;
