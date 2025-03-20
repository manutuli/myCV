

/**
 * 
 * @param {Request} request 
 * @returns {Promise} - Promise for fetched Data
 */ 
const startFetching = async (request) => {
    const res = await fetch(request)
    return await res.json()
}
/**
 * 
 * @param {String} url 
 * @returns {String} URL || Empty String
 */
const sanitizeUrl = (url)=> {
    const arr = url.split("/")
    if (arr[0] === "https:" && arr[2] === "upload.wikimedia.org") {
        return url
    }
    return ""
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
const image = document.createElement("img")
image.classList.add("img")
image.classList.add("btm-layer")
bumper.appendChild(image)
const paragraph = document.createElement("p")
const error = {
    title : "The title is not available.",
    paragraph : "The article is not available.",
    description: "The description is not available.",
}
// 
const init = () => {
    // h1.addEventListener("click", handleDarkmodeEvent)
    // 
    const promise = startFetching(quoteRequest)
    promise.then((value) => {
        const {
            title, 
            description,
            thumbnail,
            extract, 
        } = value;
        // sanitize the image src
        title 
        ? nodeTitle.innerText = title 
        : nodeTitle.innerText = error.title;
        // 
        extract 
        ? paragraph.innerText = extract 
        : paragraph.innerText = error.paragraph;
        // 
        image.src = sanitizeUrl(thumbnail.source);
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
