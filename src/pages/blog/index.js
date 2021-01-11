import React from "react"
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import PageHeader from '../../components/page-header'

const Blog = () => (
    <div>
        <Navbar/>
        <PageHeader
            title="Sharign what I love learn"
            subtitle="Blog"
            description="I help you build and grow your business through clever brands, digital experiences and products." />
        <Footer />
    </div>
)
export default Blog;