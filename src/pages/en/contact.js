import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar-en'
import PageHeader from '../../components/page-header'
import { Helmet } from 'react-helmet'

const Contact = () => (

    <>
        <Helmet
            htmlAttributes={{
                lang: 'en-US',
            }}
            title='Contact | Joksan Telles'
            meta={[
                { name: 'description', content: 'Get start a new conversation between us and get new insights because our knowledge.' },
                { name: 'keywords', content: 'design, develop, website, ui/ux, about me' },
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