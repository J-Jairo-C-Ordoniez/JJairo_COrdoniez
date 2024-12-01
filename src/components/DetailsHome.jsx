export default function Details({ data }) {

    return (
        <>
            <section id={data.link} className="port-mainContentDetailsExplainSection" key={data.title}>
                <span>
                    <img src={data.poster} alt={data.title} />
                </span>
                <span>
                    <h4 className="port-mainContentDetailsExplainSectionTitle"> {data.title} </h4>
                    <p> {data.description} </p>
                    <table className="port-mainContentDetailsExplainSectionTable">
                        <thead>
                            <tr>
                                <th> No </th>
                                <th> Tecnología </th>
                                <th> Uso </th>
                                <th> Nivel </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.tecnologis.map(tecnologi =>
                                    <tr>
                                        <td> {tecnologi.icono} </td>
                                        <td> {tecnologi.name} </td>
                                        <td> {tecnologi.use} </td>
                                        <td> {tecnologi.nivel} </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </span>
            </section>
        </>
    )
}