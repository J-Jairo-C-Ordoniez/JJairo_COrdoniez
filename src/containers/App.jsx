import Header from "../components/HeaderApp.jsx";
import Main from "../components/MainApp.jsx";
import getData from "../services/getData.js";
import Footer from "../components/FooterApp.jsx";

let data = await getData()

export default function () {
    return (
        <>
            <header>
                <Header data={data}/>
            </header>

            <main>
                <Main data={data} />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}