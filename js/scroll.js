

//
let btns = document.querySelectorAll(".btn")
for (let btn of btns) {
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        window.scrollBy({
            top: 800,
            left: 0,
            behavior : "smooth"
        })
    });
}
// 
