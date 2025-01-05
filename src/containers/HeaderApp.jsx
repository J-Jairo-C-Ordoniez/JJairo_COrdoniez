import Logo from "../components/Logo.jsx";
import Link from "../components/Links.jsx";

import "../styles/Header.css";

export default function Header ({data}) {
    return (
        <header className="port-header">
            <Logo />
            <h2 className="port-headerTitle">{data.home.nameUser}</h2>
            <nav className="port-headerMenu"> {data.menu.map(link => <Link key={link.text} data={link} />)} </nav>
        </header>
    )   
};