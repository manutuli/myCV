

/**
 * Get data from the wikipedia rest api
 * @returns {Promise} A Promise for fetched data
 */ 
const getRandomSummary = async () => {
    const api = `https://en.wikipedia.org/api/rest_v1/page/random/summary`
    const headers = new Headers()
    headers.append("Accept", "application/json")
    const request = new Request(api, headers)
    const res = await fetch(request)
    return await res.json()
}
/**
 * Validate the given url 
 * @param {string} url - The url string of the Wikipedia's api.
 * @returns {string} A string url or an empty string
 */
const sanitizeUrl = (url)=> {
    const arr = url.split("/")
    if (arr[0] === "https:" && arr[2] === "upload.wikimedia.org") {
        return url
    }
    return ""
}
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
// 
const init = () => {
    const promise = getRandomSummary()
    promise.then((value) => {
        const error = {
            title : "The title is not available.",
            paragraph : "The article is not available.",
            description: "The description is not available.",
        }
        const {
            title, 
            description,
            thumbnail,
            extract, 
        } = value;
        title 
        ? nodeTitle.innerText = title 
        : nodeTitle.innerText = error.title;
        // 
        extract 
        ? paragraph.innerText = extract 
        : paragraph.innerText = error.paragraph;
        // sanitize the image src
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
