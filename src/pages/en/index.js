import React from 'react'
import Navbar from '../../components/navbar'
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

// markup
const IndexPage = () => (
    <div>
        <Navbar />

        <main className="FrontPage">

            <FrontpageHero>

                <FrontpageHeader
                    title="Me llamo Joksan Télles, y soy diseñador y desarrollador en la ciudad de Veracruz, México :D"
                    subtitle="Hola"
                    description="Disfruto desarrollando trabajos de branding, diseño de producto de manera estratégica trabajando con personas apasionadas. Me encanta diseñar enfocado al usuario creando diseños fáciles de usar."
                    CTAlinkOne="/portfolio/" CTAtextOne="Mis proyectos"
                    CTAlinkTwo="/about/"     CTAtextTwo="Sobre mí" />

            </FrontpageHero>

            <FrontpageAbout>
                <FrontpageHeadindg
                    title="Diseñador y desarrollador web"
                    subtitle="Me especializo en diseñar experiencias digitales."
                    description="Mi propósito es ser tu guía que lleve tu idea al desarrollo de tu sitio web basado en la estrategia y desarrollo que tu equipo tiene en mente."/>

                <FrontpageCard
                    image={ LowcostIcon }
                    imageAlt="Lowcost Icon"
                    title="Mantenimiento a bajo costo"
                    description="Sea un CMS o un SSG, tu sitio web tendrá un bajo costo de mantenimiento porque muchas de las tareas más cotidianas, como actualizaciones de páginas, las podrás hacer tú sin saber absolutamente nada de código."
                    className="FrontpageCard One" />

                <FrontpageCard
                    image={ SpeedIcon }
                    imageAlt="Speed Icon"
                    title="Sitio web veloz"
                    description="Optimizaré tu sitio web para que tenga un alto performance usando las mejores prácticas de desarrollo. Tu sitio web será bien optimizado y no tendrás que preocuparte por ello."
                    className="FrontpageCard Two" />

                <FrontpageCard
                    image={ SEOIcon }
                    imageAlt="SEO Optimization"
                    title="Optimización SEO"
                    description="Diseñaré tu sitio web teniendo en mente los distintos navegadores optimizando el código haciendo que tu página sea SEO-friendly y así atraer más personas a tu negocio."
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
    </div>
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
