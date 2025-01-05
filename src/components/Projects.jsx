import CardProject from "../components/CardProject.jsx";

import "../styles/Projects.css";

export default function Main ({data}) {
    return (
        <section id="projects" className="port-project">
            {data.map(project => <CardProject key={project.title} data={project} />)}
        </section>
    )   
};