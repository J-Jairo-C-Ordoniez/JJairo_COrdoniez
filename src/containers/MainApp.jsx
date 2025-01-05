import Home from "../components/Home.jsx";
import Projects from "../components/Projects.jsx";
import Abaut from "../components/Abaut.jsx";
import Services from "../components/Services.jsx";
import Skills from "../components/Skills.jsx";

import "../styles/MainApp.css";

export default function Main ({data}) {
    return (
        <main>
            <Home data={data.home} />
            <Projects data={data.projects} />
            <Abaut data={data.abaut} />
            <Services data={data.services} />
            <Skills data={data.skills} />
        </main>
    )   
};