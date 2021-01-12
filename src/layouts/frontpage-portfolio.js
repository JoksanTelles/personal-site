import React from 'react'
import FrontpageHeading from '../components/frontpage-heading'

const FrontpagePortfolio = ( { children } ) => (
    <section className="FrontpagePortfolio">
        <div className="Container">
            <FrontpageHeading
                title="Portfolio"
                subtitle="I help you build and grow your business through clever brands, digital experiences and products."
                description="Exploring the differents paths of design, firtsly understand what components need to design." />
            <div className="PortfolioProjects">{ children }</div>
        </div>
    </section>
)

export default FrontpagePortfolio