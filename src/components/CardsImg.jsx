import "../styles/CardImg.css";

export default function CardImage ({data}) {
    return (
        <div className="port-cardImgHome">
            <img src={data} alt="photo" />
        </div>
    )
}