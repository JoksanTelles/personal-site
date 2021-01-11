import React from 'react'
import Navbar from '../components/navbar'
import PageHeader from '../components/page-header'
import Footer from '../components/footer'

const About = () => (
    
    <div>

        <Navbar />

        <PageHeader
            title="Front-End Developer and UI/UX Designer based in México."
            subtitle="About"
            description="I love create digital products based on strategy, design and code. My principles are based on essentialism: make more, doing less. " />

        <main className="page-layout">
            <div className="twocolumn">
                <div className="margin"></div>
                <div className="one">
                    <h3 className="title">I love to create digital experiences based on human beign emotions and behaviour.</h3>
                </div>
                <div className="two">
                    <p>I love create digital products based on strategy, design and code. My principles are based on essentialism: make more, doing less.</p>
                    <p>I value processes, and I create my own workflow for anything to constantly improve not just my work, but my life.</p>
                    <p>I enjoy reading blogs and watching videos everyday to learn and improve my life on topics like SEO, Marketing, Design, Development and even Healthcare and Workout. I never stop learning, every day is a oportunity to lern something new.</p>
                </div>
                <div className="margin"></div>
            </div>
        </main>
        
        <Footer />
    </div>
)
export default About;