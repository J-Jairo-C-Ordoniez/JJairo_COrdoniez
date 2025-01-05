import Soft from "./CardSoft.jsx";
import Social from "./Social.jsx";

import "../styles/Abaut.css";

export default function Abaut ({data}) {
    return (
        <section id="abaut" className="port-abaut">
            <h2>Te cuento sobre Jhon Jairo</h2>
            <section className="port-abautPoster">
                <img src={data.description.photo} alt="photo" />
            </section>
            
            <section className="port-abautText">
                <p>{data.description.text}</p>
                <div className="port-abautSocial">
                    {data.description.social.map(red => <Social key={red.name} data={red} />)}
                </div>
                <h4>Me destaco por</h4>
                <div className="port-abautSoftSkills">
                    {data.skillSoft.map(soft => <Soft key={soft.name} data={soft} />)}     
                </div>
            </section>
        </section>
    )
};