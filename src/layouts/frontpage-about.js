import React from 'react'
import LowcostIcon from '../images/frontpage__lowcost.svg'
import SEOIcon from '../images/frontpage__seo.svg'
import SpeedIcon from '../images/frontpage__speed.svg'
import FrontpageHeadindg from '../components/frontpage-heading'
import FrontpageCard from '../components/frontpage-card'

const Page = ( { children } ) => (
    <section className="AboutMe">

        <div className="Grid Container">

            <FrontpageHeadindg
                title="Web designer and developer"
                subtitle="I am specialized designing digital experiences based on research and strategy."
                description="My main purpose is guide you to create your dream website design and develop based on your needs. All my projects are based on this concepts."/>

            <div className="Spacer1"></div>

            <FrontpageCard
                image={ LowcostIcon }
                imageAlt="Lowcost Icon"
                title="Low cost mantainance"
                description="Either a CMS or SSG website, you will get a low cost mantainance for that kind of websites. You could update your content by your own with an easy-to-use way to manage your content and you won't need to pay for easy updates."
                className="FrontpageCard One" />

            <div className="Spacer2"></div>

            <FrontpageCard
                image={ SpeedIcon }
                imageAlt="Speed Icon"
                title="Fastest website"
                description="I'll optimized the performance with best practices for web development, and your website will be accelerated by purpose, and will not to be slow like your competence."
                className="FrontpageCard Two" />

            <div className="Spacer3"></div>

            <div className="Spacer4"></div>

            <FrontpageCard
                image={ SEOIcon }
                imageAlt="SEO Optimization"
                title="SEO Optimization"
                description="I'll design your website centered on your customers to improve the design and attract more people to your business."
                className="FrontpageCard Three" />
            
            <div className="Spacer5"></div>

        </div>

        <div className="Background">{ children }</div>

    </section>
)

export default Page