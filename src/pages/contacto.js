import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import PageHeader from '../components/page-header'
import { Helmet } from 'react-helmet'

const Contact = () => (

    <>
        <Helmet
            htmlAttributes={{
                lang: 'es-MX',
            }}
            title='Contacto | Joksan Télles'
            meta={[
                { name: 'description', content: 'Comunicate conmigo para que pueda ayudarte en el desarrollo de tu sitio web' },
                { name: 'keywords', content: 'diseño, desarrollo, website, ui/ux' },
                { name: 'robots', content: 'index,follow' },
            ]}
        />
        
        <Navbar />
        <PageHeader
            title="Let’s start a talk"
            subtitle="Contact"
            description="Get start a new conversation between us and get new insights because our knowledge." />
        <Footer />
    </>

)
export default Contact;