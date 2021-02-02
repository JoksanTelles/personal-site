import React from 'react'
import FrontpageHeading from '../components/frontpage-heading'

const FrontpagePortfolio = ( { children } ) => (
    <section className="FrontpagePortfolio">
        <div className="Container">
            <FrontpageHeading
                title="Portafolio"
                subtitle="Construyo y desarrollo negocios a través de branding, diseño de producto y experiencias digitales."
                description="Explora los diferentes caminos de diseño que he tomado para construir negocios como el tuyo." />
            <div className="PortfolioProjects">{ children }</div>
        </div>
    </section>
)

export default FrontpagePortfolio