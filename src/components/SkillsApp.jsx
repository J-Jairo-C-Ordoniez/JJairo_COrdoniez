export default function SkillsApp ({ data }) {
    return (
        <section className="port-mainContentSkillsContent">
            {
                data.map( skill =>
                    <div>
                        <h3> {skill.name} </h3>
                        <p> {skill.descript} </p>
                    </div>
                )
            }
        </section>
    )
}