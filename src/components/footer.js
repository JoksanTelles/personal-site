import React from 'react'
import Link from "gatsby-link"
import Logo from './icons/logo'
import BrandGithub from "./icons/brandGithub.js"
import BrandLinkedin from "./icons/brandLinkedin.js"
import BrandDribbble from "./icons/brandDribbble.js"
import BrandCodepen from "./icons/brandCodepen.js"

const Footer = () => (
    <footer className="Footer">
        <div className="container">

            <Link to="/" className="Logo">
                <Logo />
            </Link>

            <div className="Links">
                <Link to="/blog/">Blog</Link>
                <Link to="/about/">About</Link>
                <Link to="/portfolio/">Portfolio</Link>
                <Link to="/contact/">Contact</Link>
            </div>

            <hr />

            <p className="Copyrigth">© 2020 JoksanTelles. All rights reserved</p>

            <SocialMedia>

                <SocialIcon
                    link="https://github.com/JoksanTelles/"
                    icon={ <BrandGithub /> } />
                <SocialIcon
                    link="https://www.linkedin.com/in/joksantelles/"
                    icon={ <BrandLinkedin /> } />
                <SocialIcon
                    link="https://www.linkedin.com/in/joksantelles/"
                    icon={ <BrandDribbble /> } />
                <SocialIcon
                    link="https://www.linkedin.com/in/joksantelles/"
                    icon={ <BrandCodepen /> } />

            </SocialMedia>
        </div>
    </footer>
)

// Social Icons - Block
function SocialMedia( props ) {
    return (
        <div className="Social">{ props.children }</div>
    )
}

// Social Icons - Element
function SocialIcon({ link, icon }) {
    return (
        <div className="icon">
            <a href={ link } target="_blank" rel="noreferrer" >
                { icon }
            </a>
        </div>
    )
}
export default Footer