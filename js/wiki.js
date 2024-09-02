
const startFetching = async (request) => {
    const res = await fetch(request)
    return await res.json()
}

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

let url = `https://en.wikipedia.org/api/rest_v1/page/random/summary`
// 
const headers = new Headers()
headers.append("Accept", "application/json")
const quoteRequest = new Request(url, headers)
// 
const quote = document.querySelector("#wikiquote")
const text = document.createElement("p")
// 
const init = () => {
    const promise = startFetching(quoteRequest)
    promise.then((value) => {
        const {title, extract, description} = value
        text.innerText = extract
        quote.appendChild(text)
    })
}
// 
init()
