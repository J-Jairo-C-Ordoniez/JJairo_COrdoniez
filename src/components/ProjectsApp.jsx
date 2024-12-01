import '../styles/ProjectsApp.css'

export default function AbautMe({ data }) {

    return (
        <>
            <section key={data.id} className="port-mainContentProjectsText">
                <h2> {data.title} </h2>
                <p className="port-mainContentProjectsDescription">
                    {data.description}
                </p>

                <hr />

                <h3>Demo</h3>

                <div className="port-mainContentAbautContentDemo">
                    <div>
                        <img src={data.animation} alt={data.title} />
                    </div>
                    <span>
                        <a href={data.link}>
                            <svg height="30px" viewBox="0 -960 960 960" width="30px" fill="#999">
                                <path d="M146.67-160q-26.34 0-46.5-20.17Q80-200.33 80-226.67v-506.66q0-26.34 20.17-46.5Q120.33-800 146.67-800H414l66.67 66.67h332.66q26.34 0 46.5 20.16Q880-693 880-666.67H452.33l-66.66-66.66h-239v506.66l100-373.33H940L834.33-209.67q-6.66 24.67-24.5 37.17Q792-160 766.67-160h-620Zm70-66.67H770l80-306.66H296.67l-80 306.66Zm0 0 80-306.66-80 306.66Zm-70-440v-66.66 66.66Z" />
                            </svg>
                        </a>

                        <a href={data.link}>
                            <svg height="30px" viewBox="0 -960 960 960" width="30px" fill="#999">
                                <path d="M80-160v-100h80v-473.33q0-27.5 19.58-47.09Q199.17-800 226.67-800H840v66.67H226.67V-260h240v100H80Zm486.67 0q-14.17 0-23.75-9.58-9.59-9.59-9.59-23.75v-440q0-14.17 9.59-23.75 9.58-9.59 23.75-9.59h280q14.16 0 23.75 9.59 9.58 9.58 9.58 23.75v440q0 14.16-9.58 23.75-9.59 9.58-23.75 9.58h-280ZM600-260h213.33v-340H600v340Zm0 0h213.33H600Z" />
                            </svg>
                        </a>
                    </span>
                </div>
            </section>
        </>
    )
}