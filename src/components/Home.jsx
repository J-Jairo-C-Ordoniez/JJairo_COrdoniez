import CardsImg from "../components/CardsImg.jsx";

import "../styles/Home.css";
import "../styles/Contact.css";

export default function Link({data}) {
    return (
        <section id="home" className="port-home">
            <section className="port-homeCardMain">
                <h2>{data.name}</h2>
                <h1> 
                    <strong>Desarrollador Web Minimalista </strong>  
                    apasionado por crear experiencias digitales únicas
                </h1>
            </section>

            <section className="port-homeCardImgs">
                <div>
                    <p><strong>+1</strong> <br /> Año de Trabajo</p>
                    <p><strong>4</strong> <br /> Proyectos Completados</p>
                    <p><strong>+3</strong> <br /> Clientes Satisfechos</p>
                    <a className="port-linkCTA" href={data.CTA.link}> {data.CTA.text} </a>
                </div>
                <CardsImg data={data.photo} />
                <div>
                    <form target="_blank" action="https://formsubmit.co/cordobaojhonjairo21@gmail.com" method="POST">
                        <h3>Hablemos</h3>
                        <input required name="email" type="email" placeholder="Correo" />
                        <textarea required name="menssage" placeholder="Mensaje"></textarea>
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </section>
        </section>
    )
};