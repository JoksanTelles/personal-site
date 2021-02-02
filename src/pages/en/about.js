import React from 'react'
import Navbar from '../../components/navbar'
import PageHeader from '../../components/page-header'
import Footer from '../../components/footer'
import CardLevel from '../../components/CardLevel'

const About = () => (
    
    <div>

        <Navbar />

        <PageHeader
            title="Desarrollador Front-End y Diseñador UI/UX"
            subtitle="Sobre mí"
            description="Me encanta crear productos digitales basados en estrategia, diseño y código. Mis principios están basados en el minimalismo: haz más haciendo menos." />

        <main className="AboutPage">
            <div className="twocolumn">

                <div className="container">

                    <div className="one">
                        <h3 className="title">Me encanta crear experiencias digitales basadas en las emociones y el comportamiento humano.</h3>
                    </div>

                    <div className="two">
                        <p>Amo crear productos digitales basados en diseño y código limpio. Valoro los procesos y crear mi propio flujo de trabajo para simplificar cualquier cosa, no solo mi trabajo, sino además mi vida en general.</p>

                        <p>Disfruto leyendo blogs y viendo videos todos los días para aprender y mejorar en lo que sea posible. A veces me encontraré aprendiendo sobre SEO, Marketing, Diseño, Desarrollo e incluso temas pocos relacionados con mi trabajo como desarrollo de videojuegos, rutina de ejercicios y alimentación saludable.</p>

                        <p>Nunca me detengo de aprender. Cada día es una nueva oportunidad para aprender algo nuevo.</p>
                    </div>

                </div>
            </div>

            <div className="threecolumn">
                <div className="container">
                    <TitleThreeColumn
                        Title="Experiencia" />

                    <div className="two">
                        <ExperienceCard
                            Title="Ideas Eficaces | Diseñador gráfico"
                            Date="De Julio 2017 a Diciembre 2017"
                            URL="http://www.ideaseficaces.mx/"
                            Description="Mucho de mi trabajo era sacar diseños rápidos para una empresa que se dedicaba a la imprenta en serigrafía y sublimación. Mi trabajo como diseñador iba de hacer 3 a 5 diseños diarios en los días más ligeros o de 15 a 30 en los días más cansados." />
                        <ExperienceCard
                            Title="Freelancer | Diseñador, desarrollador e  ilustrador"
                            Date="De Enero 2018 a Febrero 2020"
                            URL="https://joksantelles.com"
                            Description="Siendo freelance hice muchos tipos de trabajo, desde desarrollo de personajes, diseño de sitios web con WordPress, diseño de identidad corporativa, pero la gran mayoría de mi trabajo era crear cartelería y flyers para publicidad. Además de adquirir experiencia en diseño también obtuve mucha experiencia en los negocios." />
                        
                        
                    </div>
                    <div className="three">
                        <ExperienceCard
                            Title="Plug In Marketing | Diseñador y desarrollador"
                            Date="De Marzo 2020 a la actualidad"
                            URL="http://pluginmarketing.com"
                            Description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
                    </div>
                </div>
            </div>

            <div className="threecolumn">
                <div className="container">
                    <TitleThreeColumn
                        Title="Educación" />
                    <div className="two">
                        <ExperienceCard
                            Title="Diseño gráfico - Computación del Golfo"
                            Date="De Julio 2016 a Enero 2018"
                            URL="https://www.cg.edu.mx"
                            Description="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." />
                    </div>
                    <div className="three">
                        <ExperienceCard
                            Title="UI/UX Design - Zero To Mastery"
                            Date="De Agosto 2020 a Diciembre 2020"
                            URL="https://zerotomastery.io/"
                            Description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
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
                            Description="Creativity it's an active state where you get involved in exploring everything to make your brain deeply capable to get new ideas and find new paths to follow." />
                        

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
                            Description="Creativity it's an active state where you get involved in exploring everything to make your brain deeply capable to get new ideas and find new paths to follow." />
                        
                        
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
    </div>
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