

// intersection observer
const elmts = document.querySelectorAll(".btm-layer")
const observer = new IntersectionObserver((entries)=>{
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
            // console.log(entry.target.classList)
        } else {
            // entry.target.classList.remove("show")
            // console.log(entry.target.classList)
        }
    }
},{threshold: 0.5})

for (let elmt of elmts) {
    observer.observe(elmt)
}

// observer.disconnect()

// scroll