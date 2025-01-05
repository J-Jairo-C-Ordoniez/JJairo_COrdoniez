import "../styles/Link.css";

export default function Link ({data}) {
    return (
        <a className="port-link" href={data.link}> {data.text} </a>
    )
};