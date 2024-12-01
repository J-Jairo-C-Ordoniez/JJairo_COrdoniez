export default function Methodology({ data }) {

    return (
        <>
            <section className="port-mainContentMethodText">
                <h4>
                    {data.title}
                </h4>
                <p className="port-mainContentAbautDescription">
                    {data.description}
                </p>
            </section>
        </>
    )
}