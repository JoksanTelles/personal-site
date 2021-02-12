import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import FrontpageHero from '../layouts/frontpage-hero'
import FrontpageHeader from '../components/frontpage-header'
import FrontpagePortfolio from '../layouts/frontpage-portfolio'
import LowcostIcon from '../images/frontpage__lowcost.svg'
import SEOIcon from '../images/frontpage__seo.svg'
import SpeedIcon from '../images/frontpage__speed.svg'
import FrontpageHeadindg from '../components/frontpage-heading'
import FrontpageCard from '../components/frontpage-card'
import Project from '../components/portfolio-project'
import { Helmet } from 'react-helmet'
// import favicon from '../images/favicon/favicon.ico'

// markup
const IndexPage = () => (
    <>
        <Helmet
            htmlAttributes={{
                lang: 'es-MX',
            }}
            title='Joksan Télles | Front-End Developer &amp; UI/UX Designer'
            meta={[
                { name: 'description', content: 'Hola, soy Joksan Télles, diseñador UI/UX y desarrollador front-end en la ciudad de Veracruz, México' },
                { name: 'keywords', content: 'diseño, desarrollo, website, ui/ux' },
                { name: 'robots', content: 'index,follow' },
            ]}
        />

        <Navbar />

        <main className="FrontPage">

            <FrontpageHero>

                <FrontpageHeader
                    title="Me llamo Joksan Télles, y soy diseñador y desarrollador en la ciudad de Veracruz, México :D"
                    subtitle="Hola"
                    description="Disfruto desarrollando trabajos de branding, diseño de producto de manera estratégica trabajando con personas apasionadas. Me encanta diseñar enfocado al usuario creando diseños fáciles de usar."
                    CTAlinkOne="/portafolio/" CTAtextOne="Mis proyectos"
                    CTAlinkTwo="/sobre-mi/"   CTAtextTwo="Sobre mí" />

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

                <Project
                    linkCategory="https://joksantelles.com"
                    linkProject="https://joksantelles.com"
                    linkImage="https://i.pinimg.com/originals/a5/76/0e/a5760ecb0a999a2434414831e1c89f9e.jpg"
                    altImage="This is an image">
                    <Project.Title>Aliquam non scelerisque nulla, vel suscipit ligula.</Project.Title>
                    <Project.Date>January 12, 2020</Project.Date>
                    <Project.Category>Branding</Project.Category>
                    <Project.Description>Donec elementum dolor luctus suscipit iaculis. Pellentesque rutrum viverra nunc, sed ullamcorper nisi feugiat et. Quisque rutrum risus ligula, ac mattis erat fermentum vel. Aliquam erat volutpat. Aenean consequat auctor ipsum ut ultrices. Integer nec ligula in arcu dapibus aliquam. Pellentesque aliquam viverra laoreet.</Project.Description>
                </Project>
                
                <Project
                    linkCategory="https://joksantelles.com"
                    linkProject="https://joksantelles.com"
                    linkImage="https://i.pinimg.com/736x/bc/9f/45/bc9f45faaabe200f75e8450fcf3b35a9.jpg"
                    altImage="This is an image">
                    <Project.Title>Proin vel velit ut quam blandit elementum</Project.Title>
                    <Project.Date>February 5, 2020</Project.Date>
                    <Project.Category>Design</Project.Category>
                    <Project.Description>In hac habitasse platea dictumst. Curabitur congue, tellus ac feugiat pellentesque, risus purus euismod quam, ut lacinia orci velit et diam. Nullam consequat a diam vel fermentum. Etiam ac tortor nisl. Aliquam placerat justo sit amet finibus commodo. Nullam nec sodales nunc.</Project.Description>
                </Project>
                
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
                <div className="circle"></div>
            </div>
        </section>
    )
}

export default IndexPage