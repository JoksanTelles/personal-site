import React from 'react'
import Navbar from '../../components/navbar'
import PageHeader from '../../components/page-header'
import Footer from '../../components/footer'
import PortfolioProject from '../../components/portfolio-project'

const Portfolio = () =>
(
    <div>
        <Navbar />
        
        <PageHeader
            title="See what looks behind my work"
            subtitle="Portfolio"
            description="I help you build and grow your business through clever brands, digital experiences and products." />
        <main className="Portfolio">
            <PortfolioProject
                date="January 12, 2020"
                title="Open AI's Hide-and-Seek the Systems Perspective"
                link="https://joksantelles.com/"
                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                category="Personal"
                linkCategory="https://joksantelles.com/"
                image="https://i.pinimg.com/originals/a5/76/0e/a5760ecb0a999a2434414831e1c89f9e.jpg"
                imageAlt="Imagen de prueba" />
            
            <PortfolioProject
                date="February 5, 2020"
                title="Text-rotation in CSS"
                link="https://joksantelles.com/"
                description="The rotation property of Internet Explorer’s BasicImage filter can accept one of four values: 0, 1, 2, or 3 which will rotate the element 0, 90, 180 or 270 degrees respectively."
                category="Design"
                linkCategory="https://joksantelles.com/"
                image="https://i.pinimg.com/736x/bc/9f/45/bc9f45faaabe200f75e8450fcf3b35a9.jpg"
                imageAlt="Imagen de prueba" />
        </main>
        <Footer />
    </div>
)
export default Portfolio;