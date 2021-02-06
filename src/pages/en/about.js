import React from 'react'
import Navbar from '../../components/navbar-en'
import PageHeader from '../../components/page-header'
import Footer from '../../components/footer'
import CardLevel from '../../components/CardLevel'
import { Helmet } from 'react-helmet'

const About = () => (
    
    <>
        <Helmet
            htmlAttributes={{
                lang: 'en-US',
            }}
            title='About | Joksan Telles'
            meta={[
                { name: 'description', content: 'I\'m Joksan Télles, Designer & Developer based in Veracruz city, México.' },
                { name: 'keywords', content: 'design, develop, website, ui/ux, about me' },
                { name: 'robots', content: 'index,follow' },
            ]}
        />

        <Navbar />

        <PageHeader
            title="Front-End Developer and UI/UX Designer based in México."
            subtitle="About me"
            description="I love create digital products based on strategy, design and code. My principles are based on essentialism: make more, doing less. " />

        <main className="AboutPage">
            <div className="twocolumn">

                <div className="container">

                    <div className="one">
                        <h3 className="title">I love to create digital experiences based on human beign emotions and behaviour.</h3>
                    </div>

                    <div className="two">
                        <p>I love create digital products based on strategy, design and code. My principles are based on essentialism: make more, doing less.</p>

                        <p>I value processes, and I create my own workflow for anything to constantly improve not just my work, but my life.</p>

                        <p>I enjoy reading blogs and watching videos everyday to learn and improve my life on topics like SEO, Marketing, Design, Development and even Healthcare and Workout. I never stop learning, every day is a oportunity to lern something new.</p>
                    </div>

                </div>
            </div>

            <div className="threecolumn">
                <div className="container">
                    <TitleThreeColumn
                        Title="Experience" />

                    <div className="two">
                        <ExperienceCard
                            Title="Ideas Eficaces | Graphic Designer"
                            Date="From July 2017 to December 2017"
                            URL="http://www.ideaseficaces.mx/"
                            Description="A lot of my job was to come up with quick designs for a company that was dedicated to screen printing and sublimation. My job as a designer went from doing 3 to 5 designs a day on the lightest days or 15 to 30 on the most exhausting days." />
                        <ExperienceCard
                            Title="Freelancer | Illustrator and Designer"
                            Date="From January 2018 to February 2020"
                            URL="https://joksantelles.com"
                            Description="As a freelancer, I did many types of work, from character development, WordPress website design, corporate identity design, but the vast majority of my work was creating posters and flyers for advertising. In addition to gaining experience in design, I also gained a lot of experience in business." />
                        
                        
                    </div>
                    <div className="three">
                        <ExperienceCard
                            Title="Plug In Marketing | Designer and Developer"
                            Date="From March 2020 to Currently"
                            URL="http://pluginmarketing.com"
                            Description="My job at the beginning was more to design to develop content on social networks, but later I began to work more as a Jr. Front-End Developer developing websites for clients and for the company itself." />
                    </div>
                </div>
            </div>

            <div className="threecolumn">
                <div className="container">
                    <TitleThreeColumn
                        Title="Education" />
                    <div className="two">
                        <ExperienceCard
                            Title="Graphic Design - Computación del Golfo"
                            Date="From July 2016 to January 2018"
                            URL="https://www.cg.edu.mx"
                            Description="Computación del Golfo is a school focused on education about new technologies and it was my first entry into the world of designing in a more professional way. The things I learned ranged from the basics of graphic design, using Adobe family software, and many other things." />
                    </div>
                    <div className="three">
                        <ExperienceCard
                            Title="UI/UX Design - Zero To Mastery"
                            Date="From August 2020 to December 2020"
                            URL="https://zerotomastery.io/"
                            Description="This 25+ hour course in English, taught by Andrei Neagoie at Udemy, taught me a great deal about user interface and experience design." />
                    </div>
                </div>
            </div>

            <div className="threecolumn">
                <div className="container">
                    <TitleThreeColumn Title="Current skills" />
                    <div className="two">
                        <ExperienceCard
                            Title="Developer skills"
                            Date=""
                            URL=""
                            Description="As a developer I have had a lot to learn and every day I add new things to my knowledge by getting into new technologies, getting to know new frameworks, languages, work methodologies. Every day there is a new challenge." />
                        

                        <CardLevel
                            Title="HTML"
                            Category="High level"
                            Description="Basics, Semantic HTML, SEO Optimization, Forms, Canvas, SVG, more."
                            CSS="ring one_1"
                            SkillLevel="90" />
                        <CardLevel
                            Title="CSS"
                            Category="High level"
                            Description="Basics, Flexbox CSS, Grid CSS, Responsive Design, Preprocessors (SASS and Less), BEM Methodology, more."
                            CSS="ring one_2"
                            SkillLevel="96" />
                        <CardLevel
                            Title="Javascript"
                            Category="Middle level"
                            Description="Basics, DOM Manipulation, ES6, NPM, Web Components, more."
                            CSS="ring one_3"
                            SkillLevel="74" />
                        <CardLevel
                            Title="PHP &amp; MySQL"
                            Category="Begginer level"
                            Description="Basics, cookies sessions, more."
                            CSS="ring one_4"
                            SkillLevel="25" />
                        <CardLevel
                            Title="Frameworks"
                            Category="Middle level"
                            Description="Bootstrap, Tailwind, React."
                            CSS="ring one_5"
                            SkillLevel="62" />
                        <CardLevel
                            Title="CMS &amp; SSGs"
                            Category="High level"
                            Description="WordPress (high), Jekyll (middle), Gatsby (new)."
                            CSS="ring one_6"
                            SkillLevel="82" />
                    </div>
                    <div className="three">
                        <ExperienceCard
                            Title="Designer skills"
                            Date=""
                            URL=""
                            Description="I have had the soul of a designer for as long as I can remember. I always enjoy design and constantly have fun with the colors, shapes, structures and resources that I have." />
                        
                        
                        <CardLevel
                            Title="Brand Identity"
                            Category="High level"
                            Description="Logo design, stationary design, social media content design, brand style guidelines, more."
                            CSS="ring two_1"
                            SkillLevel="86" />
                        <CardLevel
                            Title="UI Design"
                            Category="High level"
                            Description="Sketching, wireframing, prototyping, design systems, design components and more."
                            CSS="ring two_2"
                            SkillLevel="80" />
                        <CardLevel
                            Title="UX Design"
                            Category="Middle level"
                            Description="UX research, target user, user journey, user story map, project scope definition and more."
                            CSS="ring two_3"
                            SkillLevel="68" />
                        <CardLevel
                            Title="Software tools"
                            Category="High level"
                            Description="Figma, Adobe Illustrator, Adobe Photoshop, more."
                            CSS="ring two_4"
                            SkillLevel="76" />
                        <CardLevel
                            Title="Illustration"
                            Category="High level"
                            Description="Basic drawing concepts, sketching, character design, composition, perspective, color scheme, vector illustration, ink illustration, more."
                            CSS="ring two_5"
                            SkillLevel="98" />
                    </div>
                    
                </div>
            </div>

        </main>
        
        <Footer />
    </>
)

// Title for ThreeColumn - Component
function TitleThreeColumn( { Title } ) {
    return (
        <div className="one">
            <div className="divisor"></div>
            <h3 className="title">{ Title }</h3>
        </div>
    )
}
// ExperienceCard - Component
function ExperienceCard( { Title, Date, URL, Description} ) {
    return (
        <div className="ExperienceCard">
            <h4 className="title">{ Title }</h4>
            <span className="date">{ Date }</span>
            <a className="url" href={ URL }>{ URL }</a>
            <p className="description">{ Description }</p>
        </div>
    )
}

export default About;