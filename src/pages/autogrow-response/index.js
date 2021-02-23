import React from 'react'
import { Helmet } from 'react-helmet'

const Response = () => (
    <div className="body">
        <Helmet
            htmlAttributes={{
                lang: "en-US",
            }}
            title='Response to Autogrow.co'
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
                <p>Hi, there.</p>
                <p>I know that it's not an excuse, but I was working on different projects and that's why my Portfolio looks a lil' caotic with works of so long time (the illustration and graphic design section), but it's because I was working on my WebDev skills.</p>
                <p>I'm still working on this website, so it's the reason why I'm a bit shy to show you an incomplete design.</p>

                <p>This was a large project that involve Design, Copywriting (I'm not good at all, but it wasn't so bad), and development with Gatsby and ReactJs.</p>
                <br />

                <div className="gallery">
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/1_Home.png" target="_blank"><img src="https://res.cloudinary.com/joksantelles/image/upload/1_Home.png" /></a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/2_About-me.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/2_About-me.png" />
                        </a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/3_Portfolio.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/3_Portfolio.png" /></a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/4_Portfolio---Project.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/4_Portfolio---Project.png" /></a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/5_Blog.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/5_Blog.png" /></a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/6_Blog---Article.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/6_Blog---Article.png" /></a>
                    </div>
                    <div className="image">
                        <a href="https://res.cloudinary.com/joksantelles/image/upload/7_Contact.png" target="_blank">
                        <img src="https://res.cloudinary.com/joksantelles/image/upload/7_Contact.png" /></a>
                    </div>
                </div>
                <br />
                <p>Would you like to see my website in real time? Here it is:</p>
                <button className="button btn-secondary"><a href="./">View my website</a></button>
                <br />
                <p>I'm so sorry to create this boring design, but was the only way to express a bit about me and my work.</p>
                <p>I've tried to be brief, so in that way you don't spend too much time reading and be concrete.</p>
                <p>And I apologize to send this too late.</p>
                <br />
                <p>Thank you for your last response,</p>
                <p>Joksan Télles</p>
            </div>
        </main>
    </div>
)

export default Response