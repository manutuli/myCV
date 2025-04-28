

const CARDS = {
    SELECTOR : ".card",
    DATA_SET : "card",
}
const TAGS = {
    SELECTOR : ".tag",
    DATA_SET : "tag",
}
const STORE = {
    tags : [...setData(TAGS)],
    // replace with 'setData(CARDS)'
    cards : [...setData(TAGS)],
}
/**
 * Get the matching values from two arrays 
 * @param {Object} obj - tags and cards.
 * @param {string[]} obj.tags - Array of tags.
 * @param {string[]} obj.cards - Array of cards.
 * @returns {Array} An array of matching cards or an error message.
 */
function matchArrays({tags, cards}){ 
    // if (!cards || !tags ) return "no match"
    let matchingCards = cards.map((card)=>{
        let array = []
        tags.forEach((tag) => card.includes(tag) ? array.push(card) : null)
        return array[0]
    })
    return matchingCards
}
/**
 * Set an array from the text content of DOM elements
 * @param {Object} obj - The query selector and data-set values.
 * @param {string} obj.SELECTOR - The DOM query selector.
 * @param {string} obj.DATA_SET - The data-set attribute value. 
 * @returns {Array} An array that contains the text from the element.
 */
function setData({ SELECTOR, DATA_SET }){
    let array = []
    const elements = document.querySelectorAll(SELECTOR)
    elements.forEach( elmt => {
        elmt.dataset[DATA_SET] = elmt.textContent.trim()
        array.push(elmt.textContent.trim())
    })
    return array
}

matchArrays(STORE)
let tags =  document.querySelectorAll(TAGS.SELECTOR)
tags.forEach(tag => {
    tag.addEventListener("click", (e) => {
        e.preventDefault()
        e.target.classList.toggle("active")
    })
})

// console.log(matchArrays(store))

/**
 * match the selected 'data-tags' with 'data-cards' 
 *  |
 *   select the value of each tag , store the values
 *   select the values of each card , store the values 
 *   add data-tags="value" for each tag
 *   add status="" to tags
 *   match tags with cards
 *  |
 *  - add data-cards="multiple values" for each card
 *  - display the matching cards
 *  |
 */
