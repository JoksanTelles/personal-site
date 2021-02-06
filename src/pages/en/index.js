import React from 'react'
import Navbar from '../../components/navbar-en'
import Footer from '../../components/footer'
import FrontpageHero from '../../layouts/frontpage-hero'
import FrontpageHeader from '../../components/frontpage-header'
import FrontpagePortfolio from '../../layouts/frontpage-portfolio'
import PortfolioProject from '../../components/portfolio-project'
import LowcostIcon from '../../images/frontpage__lowcost.svg'
import SEOIcon from '../../images/frontpage__seo.svg'
import SpeedIcon from '../../images/frontpage__speed.svg'
import FrontpageHeadindg from '../../components/frontpage-heading'
import FrontpageCard from '../../components/frontpage-card'
import { Helmet } from 'react-helmet'

// markup
const IndexPage = () => (
    <>
        <Helmet
            htmlAttributes={{
                lang: 'en-US',
            }}
            title='Joksan Telles | Front-End Developer &amp; UI/UX Designer'
            meta={[
                { name: 'description', content: 'I\'m Joksan Télles, Designer & Developer based in Veracruz city, México.' },
                { name: 'keywords', content: 'design, develop, website, ui/ux, about me' },
                { name: 'robots', content: 'index,follow' },
            ]}
        />
        <Navbar />

        <main className="FrontPage">

            <FrontpageHero>

                <FrontpageHeader
                    title="I'm Joksan Télles, a Designer and Developer based in Veracruz city, México."
                    subtitle="Hello"
                    description="I enjoy developing work on branding, product design working strategically with passionate people. I love design focused on user making simple-to-use designs."
                    CTAlinkOne="/en/portfolio/" CTAtextOne="My projects"
                    CTAlinkTwo="/en/about/"     CTAtextTwo="About me" />

            </FrontpageHero>

            <FrontpageAbout>
                <FrontpageHeadindg
                    title="Web designer and developer"
                    subtitle="I am specialized designing digital experiences."
                    description="My main purpose is guide you to develop your dream website design based on strategy and develop what your team have in mind."/>

                <FrontpageCard
                    image={ LowcostIcon }
                    imageAlt="Lowcost Icon"
                    title="Low cost mantainance"
                    description="Either a CMS or SSG website, you will get a low cost mantainance for that kind of websites. You could update your content by your own with an easy-to-use way to manage your content and you won't need to pay for easy updates."
                    className="FrontpageCard One" />

                <FrontpageCard
                    image={ SpeedIcon }
                    imageAlt="Speed Icon"
                    title="Fastest website"
                    description="I'll optimized the performance with best practices for web development, and your website will be accelerated by purpose, and will not to be slow like your competence."
                    className="FrontpageCard Two" />

                <FrontpageCard
                    image={ SEOIcon }
                    imageAlt="SEO Optimization"
                    title="SEO optimization"
                    description="I'll design your website centered on your customers to improve the design and attract more people to your business."
                    className="FrontpageCard Three" />
            </FrontpageAbout>

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
    </>
)

// Frontpage About - Component
function FrontpageAbout( props ) {
    return (
        <section className="FrontpageAbout">
            <div className="grid">
                { props.children }
            </div>
            <div className="Background">
                <div class="circle"></div>
            </div>
        </section>
    )
}


export default IndexPage
