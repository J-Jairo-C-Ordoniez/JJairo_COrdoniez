export default function Social({ data }) {
    return (
        <>
            <span key={data.name} className="port-mainContentAbautContentSocialCard">
                <a href={data.link}>
                    <img src={data.icono} alt={data.name} />
                </a>
            </span>

        </>
    )
};