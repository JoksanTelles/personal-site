import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import FrontpageAbout from '../layouts/frontpage-about'
import FrontpageHero from '../layouts/frontpage-hero'
import FrontpageHeader from '../components/frontpage-header'

// markup
const IndexPage = () => (
    <div>
        <Navbar />

        <main className="FrontPage">

            <FrontpageHero>

                <FrontpageHeader
                    title="I'm Joksan Télles, a Designer and Developer based in Veracruz city, México"
                    subtitle="Hello"
                    description="I enjoy working on branding, product design, and strategy with passionate people. I create compelling and simple-to-use designs, whether it's a website or an interface."
                    CTAlinkOne="/portfolio/" CTAtextOne="My projects"
                    CTAlinkTwo="/about/"     CTAtextTwo="About me" />

            </FrontpageHero>

            <FrontpageAbout>lorem ipsum dolor sit amet</FrontpageAbout>
        </main>

        <Footer />
    </div>
)

export default IndexPage
