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
            title="Let’s start a new conversation"
            subtitle="Contact"
            description="Tell me more about how I can help you and I'll contact you as soon as possible :D" />
        
        
        <main className="ContactPage">
            <form className="ContactForm" name="contact" method="POST" data-netlify="true">
                
                <div className="name">
                    <span>Name</span>
                    <input type="text" name="name" placeholder="John Doe" />
                </div>

                <div className="email">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="name@domain.com" />
                </div>

                <div className="company">
                    <span>Company</span>
                    <input type="text" name="company" placeholder="ACME Inc." />
                </div>

                <div className="project">
                    <span>Type of project</span>
                    <select name="project[]">
                        <option value="brand-identity">Brand Identity</option>
                        <option value="web-design">Web Design</option>
                        <option value="web-development">Web Development</option>
                        <option value="illustration">Illustration</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div className="location">
                    <span>Location</span>
                    <input type="text" name="location" placeholder="Miami, USA" />
                </div>

                <div className="budget">
                    <span>Budget</span>
                    <select name="budget[]">
                        <option value="option-1">$500.00 USD</option>
                        <option value="option-2">$1'000.00 USD</option>
                        <option value="option-3">$3'000.00 USD</option>
                        <option value="option-4">$5'000.00 USD</option>
                    </select>
                </div>

                <div className="message">
                    <span>Message</span>
                    <textarea name="message" placeholder="Describe your project"></textarea>
                </div>
                

                <button type="submit" className="button btn-primary btn-large">Send</button>
            </form>
        </main>
        <Footer />
    </>

)
export default Contact;