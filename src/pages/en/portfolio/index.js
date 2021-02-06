import React from 'react'
import Navbar from '../../../components/navbar-en'
import PageHeader from '../../../components/page-header'
import Footer from '../../../components/footer'
import { Helmet } from 'react-helmet'

const Portfolio = () =>
(
    <>
        <Helmet
            htmlAttributes={{
                lang: 'en-US',
            }}
            title='Portfolio | Joksan Telles'
            meta={[
                { name: 'description', content: 'I help you build and grow your business through clever brands, digital experiences and products.' },
                { name: 'keywords', content: 'design, develop, website, ui/ux, about me' },
                { name: 'robots', content: 'index,follow' },
            ]}
        />

        <Navbar />
        <PageHeader
            title="See what looks behind my work"
            subtitle="Portfolio"
            description="I help you build and grow your business through clever brands, digital experiences and products." />
        <Footer />
    </>
)
export default Portfolio;