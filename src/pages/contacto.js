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
            title="Empecemos una nueva conversación"
            subtitle="Contacto"
            description="Hablame más acerca de cómo puedo ayudarte y te contactaré tan pronto como sea posible :D" />
        
        <main className="ContactPage">
            <form className="ContactForm" name="contact" method="POST" data-netlify="true">
                
                <div className="name">
                    <span>Nombre</span>
                    <input type="text" name="name" placeholder="John Doe" />
                </div>

                <div className="email">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="nombre@dominio.com" />
                </div>

                <div className="company">
                    <span>Compañía</span>
                    <input type="text" name="company" placeholder="ACME Inc." />
                </div>

                <div className="project">
                    <span>Tipo de proyecto</span>
                    <select name="project[]">
                        <option value="brand-identity">Identidad corporativa</option>
                        <option value="web-design">Diseño web</option>
                        <option value="web-development">Desarrollo web</option>
                        <option value="illustration">Ilustración</option>
                        <option value="other">Otro</option>
                    </select>
                </div>
                
                <div className="location">
                    <span>Ubicación</span>
                    <input type="text" name="location" placeholder="Miami, USA" />
                </div>

                <div className="budget">
                    <span>Presupuesto</span>
                    <select name="budget[]">
                        <option value="option-1">$500.00 USD</option>
                        <option value="option-2">$1'000.00 USD</option>
                        <option value="option-3">$3'000.00 USD</option>
                        <option value="option-4">$5'000.00 USD</option>
                    </select>
                </div>

                <div className="message">
                    <span>Mensaje</span>
                    <textarea name="message" placeholder="Describe tu proyecto"></textarea>
                </div>
                

                <button type="submit" className="button btn-primary btn-large">Enviar</button>
            </form>
        </main>
        <Footer />
    </>

)
export default Contact;