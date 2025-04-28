

// intersection observer
const images = document.querySelectorAll(".btm-layer")
const texts = document.querySelectorAll("aside")
const imageObserver = new IntersectionObserver((entries)=>{
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    }
},{threshold: 0.5})
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
for (let elmt of images) {
    imageObserver.observe(elmt)
}
// 
for (let elmt of texts) {
    textObserver.observe(elmt)
}

