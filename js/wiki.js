/**
 * Get data from the wikipedia rest api
 * @returns {Promise} A Promise for fetched data
 */ 
 async function getWikiSummary(endpoint) {
    const api = `https://en.wikipedia.org/api/rest_v1/page/summary/${endpoint}`
    const headers = new Headers()
    // Api-User-Agent : ...
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
function sanitizeUrl(url) {
    const arr = url.split("/")
    if (arr[0] === "https:" && arr[2] === "upload.wikimedia.org") {
        return url
    }
    return ""
}
function hideElement(element) {
    element.classList.remove("reveal")
}
function showElement(element) {
    element.classList.add("reveal")
}
function renderHTML({extract, title, description}) {
    const nodeTitle = document.querySelector(".wikiTitle")
    const nodeDescription = document.querySelector(".wikiDescription")
    const nodeExtract = document.querySelector(".wikiExtract")
    const error = {
        missingTitle : "The title is not available.",
        missingExtract : "The article is not available.",
        missingDescription: "The description is not available.",
    }
    title 
    ? nodeTitle.innerText = title 
    : nodeTitle.innerText = error.missingTitle;
    // 
    extract 
    ? nodeExtract.innerText = extract 
    : nodeExtract.innerText = error.missingExtract;
    // 
    description 
    ? nodeDescription.textContent = `${description}.` 
    : nodeDescription.textContent = error.missingDescription;
} 
function renderSummary(index) {
    const endpoint = STORE.endpoints[index]
    // hide Wiki
    const container = document.querySelector(".wiki")
    hideElement(container)
    // check storage 
    const wiki = localStorage.getItem(endpoint)
    if (wiki) {
        const obj = JSON.parse(wiki)
        renderHTML(obj)
        // reveal wiki
        showElement(container)
        return 
    }
    // or call api
    const promise =  getWikiSummary(endpoint)
    promise.then((value) => {
        const { title, description, extract } = value;
        renderHTML({title, extract, description})
        // reveal Wiki
        showElement(container)
        // and add to storage
        const data = JSON.stringify({extract, title, description})
        localStorage.setItem(endpoint, data)
    })
    .catch((err) => err ? console.log(err) : null)
}
function updateStorage() {
    const active = STORE.activeEndpoint
    const index = STORE.getIndexOfEndpoint(active)
    return renderSummary(index)
}
updateStorage()