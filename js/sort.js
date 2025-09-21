const TAGS = {
    SELECTOR : ".tag",
    DATA_SET : "tag",
}
const STORE = {
    tags : [...storeTags(TAGS)],
    activeTags : new Set(),
}
/** Set an array from the text content of DOM elements
 * @param {Object} obj - The query selector and data-set values.
 * @param {string} obj.SELECTOR - The DOM query selector.
 * @param {string} obj.DATA_SET - The data-set attribute value. 
 * @returns {Array} An array that contains the text from the element.
 */
function storeTags({ SELECTOR, DATA_SET }){
    let array = []
    const elements = document.querySelectorAll(SELECTOR)
    elements.forEach( elmt => {
        elmt.dataset[DATA_SET] = elmt.textContent.trim()
        array.push(elmt.textContent.trim())
    })
    return array
}
/** Sets a tag's state to active
 * 
 * @param {string} tag 
 */
function toggleTagsState(tag){
    STORE.activeTags.has(tag) 
    ? STORE.activeTags.delete(tag)
    : STORE.activeTags.add(tag)
}
/** Set Tags EventListeners
 * 
 */
function setTagsEventListeners(tags){
    tags.forEach(tag => {
        tag.addEventListener("click", (e) => {
            e.preventDefault()
            e.target.classList.toggle("active")
            toggleTagsState(e.target.textContent)
            // console.log(STORE.activeTags)
            // updateTagsList(STORE.activeTags)
        })
    })
}
function updateTagsList(array) {
    // select dom list
    // delete dom items
    // create new items
}


const tags =  document.querySelectorAll(TAGS.SELECTOR)
setTagsEventListeners(tags)
