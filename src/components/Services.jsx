import "../styles/Services.css";

export default function Services({ data }) {
    return (
        <section id="services" className="port-services">
            <h2>¿Qué puedo crear?</h2>
            {data.map(service => 
                <div key={service.id}>
                    <p className="port-serviceId">{service.id}</p>
                    <h4 className="port-serviceTitle">{service.title}</h4>
                    <p className="port-serviceDescription">{service.description}</p>
                </div>
            )}
        </section>
    )
};