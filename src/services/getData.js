export default async function getData () {
    try {
        let response = await fetch ('dates.json')
        let data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}