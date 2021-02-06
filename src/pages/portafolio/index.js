import React from 'react'
import Navbar from '../../components/navbar'
import PageHeader from '../../components/page-header'
import Footer from '../../components/footer'
import Project from '../../components/portfolio-project'
import { Helmet } from 'react-helmet'

const Portfolio = () =>
(
    <>
        <Helmet
            htmlAttributes={{
                lang: 'es-MX',
            }}
            title='Portafolio | Joksan Télles'
            meta={[
                { name: 'description', content: 'Puedo ayudarte a construir y hacer crecer tu negocio através de branding, diseño de productos y experiencias digitales' },
                { name: 'keywords', content: 'diseño, desarrollo, website, ui/ux' },
                { name: 'robots', content: 'index,follow' },
            ]}
        />
        
        <Navbar />
        
        <PageHeader
            title="See what looks behind my work"
            subtitle="Portfolio"
            description="I help you build and grow your business through clever brands, digital experiences and products." />
        <main className="Portfolio">
            
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
        </main>
        <Footer />
    </>
)
export default Portfolio;