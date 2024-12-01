// Mosules
import { listDetails } from "../services/lists.js";
import handdleChangeFocus from "../services/focus.js";

import Details from "./DetailsHome.jsx";
import Sections from "./Sections.jsx";
import AbautMe from "./AboutMe.jsx";
import ProjectsApp from "./ProjectsApp.jsx"
import Skills from "./SkillsApp.jsx";
import Methodology from "./Methodology.jsx";
import ContactApp from "./ContactApp.jsx";

// Styles 
import "../styles/MainApp.css";

export default function Main({ data }) {

    return (
        <>
            <section id="home" className="port-mainContentEntry">
                <h1>
                    ¡Hola! Soy
                    <br />
                    <strong>Jhon</strong> Jairo
                    <strong>Cordoba</strong> Ordoñez
                </h1>
                <h2 className="port-mainDescription">
                    {data.home.description}
                </h2>

                <Sections data={{ link: "#contact", text: data.home.CTA, className: "port-mainDeatilsCTA" }} />

            </section>

            <section className="port-mainContentDetails">
                <ul onClick={handdleChangeFocus} className="port-mainContentDetailsMenu">

                    {listDetails.map(detail => <Sections data={detail} />)}

                </ul>
                <article className="port-mainContentDetailsExplain">

                    {data.home.details.map(detail => <Details data={detail} />)}

                </article>
            </section>

            <section id="abautme" className="port-mainContentAbaut">
                <AbautMe data={data.abaut} />
            </section>

            <section id="skills" className="port-mainContentSkills">
                <Skills data={data.skills} />
            </section>

            <section id="projects" className="port-mainContentProjects">
                <h2 className="port-mainContentProjectsTitle">
                    Conoce
                    <strong> mis proyectos </strong>
                </h2>
                <section className='port-mainContentProjectsInto' >
                    {data.projects.map(project => <ProjectsApp data={project} />)}
                </section>
            </section>

            <section id="method" className="port-mainContentMethodology">
                <h2 className="port-mainContentMethodologyTitle">
                    Conoce
                    <strong> como trabajo los proyectos </strong>
                </h2>
                <p className="port-mainContentMethodologyDescription">
                    {data.desing.description}
                </p>
                <section className='port-mainContentMethologyInto' >
                    {data.desing.steps.map(method => <Methodology data={method} />)}
                </section>
            </section>

            <section id="contact" className="port-mainContentContactContent">
                <h2 className="port-mainContentProjectsTitle">¡Hablemos de tu proximo proyecto!</h2>
                <section className='port-mainContentProjectsInto' >
                    <ContactApp />
                </section>
            </section>
        </>
    )
}