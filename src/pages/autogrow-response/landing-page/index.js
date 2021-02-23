import React from 'react'
import { Helmet } from 'react-helmet'

const LandingPage = () => (
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
                <h1>Landing Page</h1>
                <p>This design I made just in this day for this job application.</p>
                <p>And it's a fictional business :)</p>
                <div className="gallery">
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/v1614045229/Landingpage.png" target="_blank"><img src="https://res.cloudinary.com/joksantelles/image/upload/v1614045229/Landingpage.png" /></a>
                    </div>
                </div>
                <p>It's on my <a href="https://dribbble.com/shots/15173600-Landing-page" target="_blank">Dribbble account</a> too! But not complete as the image attached in the link above.</p>
            </div>
            
        </main>
    </div>
)

export default LandingPage