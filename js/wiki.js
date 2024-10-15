

/** 
 * When I navigate to the page,
 * I can see a wiki quote.
 * 
*/

/**
 * When I click on "new quote", 
 * I can see a new quote.
 * 
 */

const startFetching = async (request) => {
    const res = await fetch(request)
    return await res.json()
}
// 
let url = `https://en.wikipedia.org/api/rest_v1/page/random/summary`
// 
const headers = new Headers()
headers.append("Accept", "application/json")
const quoteRequest = new Request(url, headers)
// 
const container = document.querySelector("#wikiquote")
const nodeTitle = document.querySelector(".wikiTitle")
const bumper = document.querySelector(".bumper")
const image = document.querySelector("img.btm-layer")
const paragraph = document.createElement("p")
const error = {
    title : "The title was not found.",
    para : "The article could not be found."
}
const init = () => {
    const promise = startFetching(quoteRequest)
    promise.then((value) => {
        const {
            title, 
            description,
            thumbnail,
            extract, 
        } = value;
        title ? nodeTitle.innerText = title : nodeTitle.innerText = error.title;
        paragraph ? paragraph.innerText = extract : paragraph.innerText = error.para;
        image.src = thumbnail.source;
        bumper.dataset.description = description + ".";
        // 
        container.appendChild(paragraph)
    })
}
// 
init()
