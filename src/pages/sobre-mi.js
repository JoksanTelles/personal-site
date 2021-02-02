import React from 'react'
import Navbar from '../components/navbar'
import PageHeader from '../components/page-header'
import Footer from '../components/footer'
import CardLevel from '../components/CardLevel'

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
                            Description="Mucho de mi trabajo era sacar diseños rápidos para una empresa que se dedicaba a la imprenta en serigrafía y sublimación. Mi trabajo como diseñador iba de hacer 3 a 5 diseños diarios en los días más ligeros o de 15 a 30 en los días de más trabajo." />
                        <ExperienceCard
                            Title="Freelancer | Diseñador gráfico e  ilustrador"
                            Date="De Enero 2018 a Febrero 2020"
                            URL="https://joksantelles.com"
                            Description="Siendo freelance hice muchos tipos de trabajo, desde desarrollo de personajes, diseño de sitios web con WordPress, diseño de identidad corporativa, pero la gran mayoría de mi trabajo era crear cartelería y flyers para publicidad. Además de adquirir experiencia en diseño también obtuve mucha experiencia en los negocios." />
                        
                        
                    </div>
                    <div className="three">
                        <ExperienceCard
                            Title="Plug In Marketing | Diseñador y desarrollador"
                            Date="De Marzo 2020 a la actualidad"
                            URL="http://pluginmarketing.com"
                            Description="Mi trabajo al inicio consistía más en diseñar para desarrollar contenido en redes sociales, pero más adelante comencé a trabajar más como Jr. Front-End Developer desarrollando sitios web para clientes y para la propia empresa." />
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
                            Description="Computación del Golfo es una escuela enfocada en la educación sobre las nuevas tecnologías y fue mi primer entrada al mundo diseño de manera más profesional. Las cosas que aprendí van desde las bases del diseño gráfico, el uso de software de la familia Adobe y muchas otras cosas." />
                    </div>
                    <div className="three">
                        <ExperienceCard
                            Title="UI/UX Design - Zero To Mastery"
                            Date="De Agosto 2020 a Diciembre 2020"
                            URL="https://zerotomastery.io/"
                            Description="Este curso en inglés de +25 horas de duración, impartido por Andrei Neagoie en Udemy, me enseñó gran cantidad de cosas acerca del diseño de experiencia e interfáz del usuario." />
                    </div>
                </div>
            </div>

            <div className="threecolumn">
                <div className="container">
                    <TitleThreeColumn Title="Habilidades en la actualidad" />
                    <div className="two">
                        <ExperienceCard
                            Title="Habilidades como desarrollador"
                            Date=""
                            URL=""
                            Description="Cómo desarrollador he tenido mucho por aprender y cada día agrego nuevas cosas a mis conocimientos adentrandome en las nuevas teccnologías, conociendo nuevos frameworks, lenguajes, metodologías de trabajo. Cada día hay un nuevo reto." />
                        

                        <CardLevel
                            Title="HTML"
                            Category="Nivel avanzado"
                            Description="Conocimientos Básicos, HTML Semántico, Optimización SEO, Formularios, Canvas, SVG, más."
                            CSS="ring one_1"
                            SkillLevel="90" />
                        <CardLevel
                            Title="CSS"
                            Category="Nivel avanzado"
                            Description="Conocimientos Básicos, Flexbox, Grid, Diseño Responsive, Preprocesadores (SASS y Less), Metodología BEM y RSCSS, más."
                            CSS="ring one_2"
                            SkillLevel="96" />
                        <CardLevel
                            Title="Javascript"
                            Category="Nivel intermedio"
                            Description="Conocimientos Básicos, Manipulación del DOM, ECMAScript 6, NPM, Componentes Web, más."
                            CSS="ring one_3"
                            SkillLevel="74" />
                        <CardLevel
                            Title="PHP &amp; MySQL"
                            Category="Nivel principiante"
                            Description="Conocimientos básicos, sesiones con cookies, más."
                            CSS="ring one_4"
                            SkillLevel="25" />
                        <CardLevel
                            Title="Frameworks"
                            Category="Nivel intermedio"
                            Description="Bootstrap, Tailwind, React."
                            CSS="ring one_5"
                            SkillLevel="62" />
                        <CardLevel
                            Title="CMS &amp; SSG"
                            Category="Nivel avanzado"
                            Description="WordPress y Gatsby (nuevo)."
                            CSS="ring one_6"
                            SkillLevel="82" />
                    </div>
                    <div className="three">
                        <ExperienceCard
                            Title="Habilidades como diseñador"
                            Date=""
                            URL=""
                            Description="Tengo alma de diseñador desde que tengo memoria. Siempre disfruto del diseño y constantemente me divierto con los colores, las formas, las estructuras y los recursos con los que cuento." />
                        
                        
                        <CardLevel
                            Title="Brand Identity"
                            Category="Nivel avanzado"
                            Description="Diseño de logo, Diseño de papelería corporativa, diseño de contenido para redes sociales, manual de identidad corporativa, más."
                            CSS="ring two_1"
                            SkillLevel="86" />
                        <CardLevel
                            Title="UI Design"
                            Category="Nivel avanzado"
                            Description="Bocetaje, wireframing, prototipado, design systems, diseño de componentes y más."
                            CSS="ring two_2"
                            SkillLevel="80" />
                        <CardLevel
                            Title="UX Design"
                            Category="Nivel intermedio"
                            Description="Investigación UX, user persona, user journey, user story map, definición del proyecto y más."
                            CSS="ring two_3"
                            SkillLevel="68" />
                        <CardLevel
                            Title="Software tools"
                            Category="Nivel avanzado"
                            Description="Figma, Adobe Illustrator, Adobe Photoshop, muchas otras."
                            CSS="ring two_4"
                            SkillLevel="76" />
                        <CardLevel
                            Title="Illustration"
                            Category="Nivel avanzado"
                            Description="Conceptos básicos de dibujo, bocetaje, diseño de personajes, composición, perspectiva, esquema de colores, ilustración vectorial, ilustración a tinta en tradicional, más."
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
            <a className="url" href={ URL } rel="nofollow" target="_blank">{ URL }</a>
            <p className="description">{ Description }</p>
        </div>
    )
}

export default About;