import React from "react"
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar-en'
import PageHeader from '../../../components/page-header'
import Helmet from 'react-helmet'

const Blog = () => (
    <>
        <Helmet
            htmlAttributes={{
                lang: 'en-US',
            }}
            title='Blog | Joksan Telles'
            meta={[
                { name: 'description', content: 'En este espacio me encontrarás compartiendo contenido de valor ya sea de diseño, desarrollo o incluso temas off-topic.' },
                { name: 'keywords', content: 'design, develop, website, ui/ux, about me' },
                { name: 'robots', content: 'index,follow' },
            ]}
        />

        <Navbar/>
        <PageHeader
            title="Compartiendo cositas :)"
            subtitle="Blog"
            description="En este espacio me encontrarás compartiendo contenido de valor ya sea de diseño, desarrollo o incluso temas off-topic." />
        <Footer />
    </>
)
export default Blog;