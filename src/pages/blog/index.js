import React from "react"
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import PageHeader from '../../components/page-header'
import Helmet from 'react-helmet'

const Blog = () => (
    <>
        <Helmet
            htmlAttributes={{
                lang: 'es-MX',
            }}
            title='Blog | Joksan Télles'
            meta={[
                { name: 'description', content: 'En este espacio me encontrarás compartiendo contenido de valor ya sea de diseño, desarrollo o incluso temas off-topic.' },
                { name: 'keywords', content: 'diseño, desarrollo, blog, ui/ux' },
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