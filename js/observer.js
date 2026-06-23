const images = document.querySelectorAll(".btm-layer")
const aside = document.querySelectorAll("aside")
// const wiki = document.getElementById("wikiSummary")
// 
const imageObserver = new IntersectionObserver((entries)=>{
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    }
},{threshold: 0.5})
// 
const textObserver = new IntersectionObserver((entries)=>{
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal")
        } else {
            entry.target.classList.remove("reveal")
        }
    }
},{threshold: 0.2})
// 
// const WikiObserver = new MutationObserver((records) => {
//     records.forEach((mutation) => {
//         if (mutation.type === 'attributes') {
//             console.log(mutation.target)
//             const node = mutation.target
//         } 
//     })
// })
// WikiObserver.observe(wiki, {attributes: true})
// WikiObserver.disconnect()
// 
for (let elmt of images) {
    imageObserver.observe(elmt)
}
for (let elmt of aside) {
    textObserver.observe(elmt)
}