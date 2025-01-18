

/**
 * 
 * @param {MouseEvent} e 
 */
function handleDarkmodeEvent(e){
    e.preventDefault()
    e.target.classList.toggle("darkmode")
    console.log(e.target)
}
/**
 * 
 * @param {Request} request 
 * @returns {promise}
 */ 
const startFetching = async (request) => {
    const res = await fetch(request)
    return await res.json()
}
// 
let url = `https://en.wikipedia.org/api/rest_v1/page/random/summary`
const headers = new Headers()
headers.append("Accept", "application/json")
const quoteRequest = new Request(url, headers)
// 
const container = document.querySelector("#wikiquote")
const nodeTitle = document.querySelector(".wikiTitle")
const h1 = document.querySelector("h1")
const bumper = document.querySelector(".bumper")
const image = document.querySelector("img.btm-layer")
const paragraph = document.createElement("p")
const error = {
    title : "The title is not available.",
    paragraph : "The article is not available.",
    description: "The description is not available.",
}
// 
const init = () => {
    h1.addEventListener("click", handleDarkmodeEvent)
    // 
    const promise = startFetching(quoteRequest)
    promise.then((value) => {
        const {
            title, 
            description,
            thumbnail,
            extract, 
        } = value;
        // 
        title 
        ? nodeTitle.innerText = title 
        : nodeTitle.innerText = error.title;
        // 
        paragraph 
        ? paragraph.innerText = extract 
        : paragraph.innerText = error.paragraph;
        // 
        image.src = thumbnail.source;
        // 
        description 
        ? bumper.dataset.description = description + "." 
        : bumper.dataset.description = error.description;
        // 
        container.appendChild(paragraph)
    })
}
// 
init()
