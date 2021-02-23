import React from 'react'
import { Helmet } from 'react-helmet'

const GraphicDesign = () => (
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
                <h1>Graphic Design</h1>
                <h2>Brand Identity Design</h2>
                <p>I had the challenge to create the Brand Identity for a Bakery and I needed create 3 different concepts.</p>
                <p>Here they are:</p>

                <div className="gallery">
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/pasteleria-victoria-1.png" target="_blank"><img src="https://res.cloudinary.com/joksantelles/image/upload/pasteleria-victoria-1.png" /></a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/pasteleria-victoria-2.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/pasteleria-victoria-2.png" />
                        </a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/pasteleria-victoria-3.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/pasteleria-victoria-3.png" /></a>
                    </div>
                </div>
                
                <p>Click on them to watch in full size in an external link.</p>
            </div>
        </main>
    </div>
)

export default GraphicDesign