import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import FrontpageAbout from '../layouts/frontpage-about'
import FrontpageHero from '../layouts/frontpage-hero'
import FrontpageHeader from '../components/frontpage-header'
import FrontpagePortfolio from '../layouts/frontpage-portfolio'
import PortfolioProject from '../components/portfolio-project'

// markup
const IndexPage = () => (
    <div>
        <Navbar>
            
        </Navbar>

        <main className="FrontPage">

            <FrontpageHero>

                <FrontpageHeader
                    title="I'm Joksan Télles, a Designer and Developer based in Veracruz city, México"
                    subtitle="Hello"
                    description="I enjoy working on branding, product design, and strategy with passionate people. I create compelling and simple-to-use designs, whether it's a website or an interface."
                    CTAlinkOne="/portfolio/" CTAtextOne="My projects"
                    CTAlinkTwo="/about/"     CTAtextTwo="About me" />

            </FrontpageHero>

            <FrontpageAbout />

            <FrontpagePortfolio>
                <PortfolioProject
                    date="January 12, 2020"
                    title="Open AI's Hide-and-Seek the Systems Perspective"
                    link="https://joksantelles.com/"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    category="Personal"
                    linkCategory="https://joksantelles.com/" />
                
                <PortfolioProject
                    date="February 5, 2020"
                    title="Text-rotation in CSS"
                    link="https://joksantelles.com/"
                    description="The rotation property of Internet Explorer’s BasicImage filter can accept one of four values: 0, 1, 2, or 3 which will rotate the element 0, 90, 180 or 270 degrees respectively."
                    category="Design"
                    linkCategory="https://joksantelles.com/" />
            </FrontpagePortfolio>

        </main>

        <Footer />
    </div>
)

export default IndexPage
