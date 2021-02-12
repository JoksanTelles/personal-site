import React from 'react'
import Link from "gatsby-link"
import Logo from './icons/logo'
import BrandGithub from "./icons/brandGithub.js"
import BrandLinkedin from "./icons/brandLinkedin.js"
import BrandCodepen from "./icons/brandCodepen.js"

const Footer = () => (
    <footer className="Footer">
        <div className="container">

            <Link to="/" className="Logo">
                <Logo />
            </Link>

            <div className="Links">
                <Link to="/blog/">Blog</Link>
                <Link to="/sobre-mi/">Sobre mí</Link>
                <Link to="/portafolio/">Portafolio</Link>
                <Link to="/contacto/">Contacto</Link>
            </div>

            <hr />

            <p className="Copyrigth">© 2020 JoksanTelles. Todos los derechos reservados</p>

            <SocialMedia>

                <SocialIcon
                    link="https://github.com/JoksanTelles/"
                    icon={ <BrandGithub /> } />
                <SocialIcon
                    link="https://www.linkedin.com/in/joksantelles/"
                    icon={ <BrandLinkedin /> } />
                <SocialIcon
                            link="https://codepen.io/JoksanTelles/"
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