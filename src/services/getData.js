export default async function getData () {
    try {
        let response = await fetch('data.json');
        return await response.json();
    } catch (err) {
        throw({ status: response.status, menssage: 'Error' })
    }
};