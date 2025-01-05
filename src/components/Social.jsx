import "../styles/Social.css";

export default function Social ({data}) {
    return (
        <a target="_blank" className="port-linkCard" href={data.link}>
            <img src={data.icon} alt={data.name} />
        </a>
    )
};