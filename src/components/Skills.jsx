import CardSkill from "./CardSkill.jsx";

import "../styles/Skills.css";

export default function Skills({ data }) {
    return (
        <section id="skills" className="port-skills">
            <h2>Mis habilidades Técnicas</h2>
            {data.map(skill => <CardSkill key={skill.title} data={skill} /> )}
        </section>
    )
};