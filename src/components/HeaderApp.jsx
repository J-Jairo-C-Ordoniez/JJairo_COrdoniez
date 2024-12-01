// Componenets
import Sections from "./Sections";
// Services
import { listSections } from "../services/lists.js";
// Styles 
import "../styles/HeaderApp.css";

export default function Header({ data }) {
    
    return (
        <>
            <section className="port-headerContent">
                <div className="port-headerContentLogo"></div>
                <h2> 
                    <strong> J </strong> Jairo 
                    <strong> C </strong> Ordoñez 
                </h2>
            </section>

            <section className="port-headerMenu">
                <nav className="port-headerMenuNav">
                    {
                        listSections.map( section => 
                            <Sections data={ section } />
                        )
                    }
                </nav>
            </section>

            <section className="port-headerTheme">
                <button className="port-headerThemeBtn">
                    <div className="port-headerThemeBtnClick"></div>
                </button>
            </section>
        </>
    )
};