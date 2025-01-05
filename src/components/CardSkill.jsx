import Tecnologis from "./Tecnologis.jsx";

import "../styles/CardSkill.css";

export default function CardSkill ({data}) {
    return (
        <section className="port-skillsContentMain">
            <div>
                <img src={data.poster} alt={data.title} />
            </div>
            <div>
                <h4>{data.title}</h4>
                <div>
                    {data.tecnologis.map(tecnologi => <Tecnologis key={tecnologi} data={tecnologi} />)}
                </div>
                <p className="port-skillDescription">{data.description}</p>
            </div>
        </section>
    )
};