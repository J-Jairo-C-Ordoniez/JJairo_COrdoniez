export default function Sections ({ data }) {
    
    return (
        <>
            <a className={data.className} href={data.link}> {data.text} </a>
        </>
    )
};