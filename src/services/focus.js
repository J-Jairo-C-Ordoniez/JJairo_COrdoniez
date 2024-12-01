export default function handdleChangeFocus (e) {
    e.bubbles = true
    let removeActive = e.target.parentElement.children
    for (const list of removeActive) {
        list.classList.remove('port-mainDetilsActive')
    }
    e.target.classList.add('port-mainDetilsActive')
}