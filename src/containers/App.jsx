import Header from "./HeaderApp.jsx";
import Main from "./MainApp.jsx";
import getData from "../services/getData.js";

import '../styles/Main.css';

let data = await getData();

export default function () {
    return (
        <>
            <Header data={data} />
            <Main data={data} />
        </>
    )
};