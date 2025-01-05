import Tecnologi from "./Tecnologis.jsx";
import Social from "./Social.jsx";

import "../styles/CardProject.css";

export default function CardPrpject({data}) {
    return (
        <section className="port-projectCard">
            <div className="port-projectCardImg">
                <img src={data.poster} alt={data.title} />
            </div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <div className="port-projectCardTecnologis">
                {data.tecnologis.map(tecnologi => <Tecnologi key={tecnologi} data={tecnologi} />)}
            </div>

            {
                data.type === "desing" ?
                <div className="port-projectsRedes">
                    <Social data={{ icon: "../../public/img/figma.png", link: data.link, name: "Figma" }} />
                </div>
                :
                <div className="port-projectsRedes">
                    <Social data={{ icon: "../../public/img/github.png", link: data.github, name: "Github" }} />
                    <Social data={{ icon: "../../public/img/enlace.png", link: data.link, name: "Link" }} />
                </div>
            }
        </section>
    )
};