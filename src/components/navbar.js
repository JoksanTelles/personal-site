import React, { useState } from "react"
import Link from "gatsby-link"
import Logo from "./icons/logo.js"
import IconBlog from "./icons/iconBlog.js"
import IconAbout from "./icons/iconAbout.js"
import IconPortfolio from "./icons/iconPortfolio.js"
import IconContact from "./icons/iconContact.js"
import IconMenu from "./icons/iconMenu"
import BrandGithub from "./icons/brandGithub.js"
import BrandLinkedin from "./icons/brandLinkedin.js"
import BrandCodepen from "./icons/brandCodepen.js"

const Navbar = ( { blog, blogLink, about, aboutLink, portfolio, portfolioLink } ) => {

    // Yep, here's the Navbar Responsive state :P
    const [navigation, navigationOpen] = useState(false)

    return (
        <header className={ navigation ? "Navbar Open" : "Navbar"}>
            <div className="container">

                <Link to="/" className="Logo">
                    <Logo />
                </Link>

                <Navigation>

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

                    <NavLinks>

                        <NavItem
                            link="/blog/"
                            linkText="Blog"
                            icon={ <IconBlog/> } />

                        <NavItem
                            link="/sobre-mi/"
                            linkText="Sobre mí"
                            icon={ <IconAbout/> } />

                        <NavItem
                            link="/portafolio/"
                            linkText="Portafolio"
                            icon={ <IconPortfolio/> } />

                        <NavItem
                            link="/contacto/"
                            linkText="Contacto"
                            icon={ <IconContact/> } />

                    </NavLinks>

                </Navigation>
                

                <button
                    onClick={() => navigationOpen(!navigation)}
                    className="Menu">

                    <IconMenu />
                    
                </button>
                
            </div>

            <NavigationMobile>

                <NavLinks>

                    <NavItem
                        link="/blog/"
                        linkText="Blog"
                        icon={ <IconBlog/> } />

                    <NavItem
                        link="/sobre-mi/"
                        linkText="Sobre mí"
                        icon={ <IconAbout/> } />

                    <NavItem
                        link="/portafolio/"
                        linkText="Portafolio"
                        icon={ <IconPortfolio/> } />

                    <NavItem
                        link="/contacto/"
                        linkText="Contacto"
                        icon={ <IconContact/> } />

                </NavLinks>

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

                <div className="Extra"><a href="./privacy-policy">Privacy and Policy</a></div>

            </NavigationMobile>
            
        </header>
    )
}

// Navigation structure (Mobile)
function NavigationMobile( props ) {
    return (
        <nav className="MobileNavigation">
            { props.children }
        </nav>
    )
}

// Navigation structure (Desktop)
function Navigation( props ) {
    return (
        <nav className="Navigation">
            { props.children }
        </nav>
    )
}

// Navigation links - Block
function NavLinks({ children }) {
    return (
        <div className="NavLinks">{children}</div>
    )
}

// Navigation links - Items
function NavItem( { link, linkText, icon }) {
    return (

            <Link to={ link } className="btn-soft">

                { icon }{ linkText }

            </Link>
    )
}

// Social Icons - Block
function SocialMedia( props ) {
    return (
        <div className="Social">{ props.children }</div>
    )
}

// Social Icons - Element
function SocialIcon({ link, icon }) {
    return (
        <a href={ link } target="_blank" rel="noreferrer">
            { icon }
        </a>
    )
}


export default Navbar;