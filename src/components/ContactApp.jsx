import "../styles/ContactApp.css";

export default function ContactApp () {
    return (
        <form method="POST">
            <label htmlFor="name"> Nombre </label>
            <br />
            <input type="text" required id="name" />
            <br />
            <label htmlFor="email"> Correo </label>
            <br />
            <input type="email" id="email" required />
            <br />
            <label htmlFor="menssage"> Mensaje </label>
            <br />
            <textarea name="menssage" required id="menssage"></textarea>
            <br />
            <input type="submit" />
        </form>
    )
}