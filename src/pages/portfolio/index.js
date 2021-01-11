import React from 'react'
import Navbar from '../../components/navbar'
import PageHeader from '../../components/page-header'
import Footer from '../../components/footer'

const Portfolio = () =>
(
    <div>
        <Navbar />
        <PageHeader
            title="See what looks behind my work"
            subtitle="Portfolio"
            description="I help you build and grow your business through clever brands, digital experiences and products." />
        <Footer />
    </div>
)
export default Portfolio;