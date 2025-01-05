import "../styles/Soft.css";

export default function Soft ({data}) {
    return (
        <span className="port-skillsSoft">
            <h3>{data.name}</h3>
            <p>{data.description}</p>
        </span>
    )
};