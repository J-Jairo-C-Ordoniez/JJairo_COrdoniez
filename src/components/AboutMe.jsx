import Social from "./SocialAbaut.jsx";

export default function AbautMe({ data }) {

    return (
        <>
            <section className="port-mainContentAbautText">
                <h2> Te cuento sobre 
                    <br />
                    <strong>Jhon Jairo</strong>
                </h2>
                <p className="port-mainContentAbautDescription">
                    {data.description}
                </p>
                <br />
                <p>
                    {data.frontend}
                </p>
                <br />
                <p>
                    {data.backend}
                </p>

                <div className="port-mainContentAbautContentSocial">

                    {
                        data.social.map( app =>   <Social data={app}/> )
                    }
                    
                </div>
            </section>
        </>
    )
}