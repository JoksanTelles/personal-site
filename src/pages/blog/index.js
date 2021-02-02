import React from "react"
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import PageHeader from '../../components/page-header'

const Blog = () => (
    <div>
        <Navbar/>
        <PageHeader
            title="Compartiendo cositas :)"
            subtitle="Blog"
            description="En este espacio me encontrarás compartiendo contenido de valor ya sea de diseño, desarrollo o incluso temas off-topic." />
        <Footer />
    </div>
)
export default Blog;