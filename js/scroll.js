

let btns = document.querySelectorAll(".btn")
// loop 
for (let btn of btns) {
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        // e.target.classList.add("scroll")
        window.scrollBy({
            top: 1000,
            left: 0,
            behavior : "smooth"
        })
    });
}
// 
