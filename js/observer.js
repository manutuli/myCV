

// intersection observer
const images = document.querySelectorAll(".btm-layer")
const texts = document.querySelectorAll("aside")
const imageObserver = new IntersectionObserver((entries)=>{
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
            // console.log(entry.target.classList)
        } else {
            entry.target.classList.remove("show")
            // console.log(entry.target.classList)
        }
    }
},{threshold: 0.5})
const textObserver = new IntersectionObserver((entries)=>{
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal")
            // console.log(entry.target.classList)
        } else {
            entry.target.classList.remove("reveal")
            // console.log(entry.target.classList)
        }
    }
},{threshold: 0.5})

for (let elmt of images) {
    imageObserver.observe(elmt)
}
for (let elmt of texts) {
    textObserver.observe(elmt)
}
// observer.disconnect()

