import React from 'react'
import { Helmet } from 'react-helmet'

const Illustration = () => (
    <div className="body">
        <Helmet
            htmlAttributes={{
                lang: "en-US",
            }}
            title='Landing page | Response to Autogrow.co'
            meta={[
                {
                    name: 'description',
                    content: 'Here\'s suppouse that it\'s the description',
                },
                { name: 'robots', content: 'noindex,nofollow' },
            ]}
        />
        <main className="Response">
            <div className="container">
                <p>May be it's not what you would like to see, but are the only Illustrations that I made for the web.</p>

                <p>This is a real project, and here's the link:</p>
                <p><a href="https://www.2players-creative.com/servicios/diseno-de-mascot-logo-para-esport-team/" target="_blank">https://www.2players-creative.com/servicios/diseno-de-mascot-logo-para-esport-team/</a></p>

                <div className="illustrations">
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/illustration__01.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/illustration__01.png"/></a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/illustration__02.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/illustration__02.png"/></a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/illustration__03.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/illustration__03.png"/></a>
                    </div>
                </div>
            </div>
            
        </main>
    </div>
)

export default Illustration