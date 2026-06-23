/** Updates the active state
 * @param {String} tag 
 */
function updateActiveEndpoints(endpoint){
    STORE.activeEndpoints.has(endpoint) 
    ? STORE.activeEndpoints.delete(endpoint)
    : STORE.activeEndpoints.add(endpoint)
    // 
    STORE.activeEndpoint = endpoint
}
/** Updates tag and summary
 * @param {Event} e - click event object
 */
function handleTagClick(e) {
    e.target.classList.toggle("active")
    const endpoint = e.target.dataset.tag
    if (!endpoint) return
    updateActiveEndpoints(endpoint.trim())
    updateStorage()
}
/** Adds EventListeners to tags
 * @param {NodeListOf<Element>} tags 
 */
function addTagsEventListeners(tag){
    tag.addEventListener("click", (e) => {
        e.preventDefault()
        handleTagClick(e)
    })
}
const tags =  document.querySelectorAll(STORE.QUERY_SELECTOR_TAGS)
tags.forEach(tag => addTagsEventListeners(tag))