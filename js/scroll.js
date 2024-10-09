


let btns = document.querySelectorAll(".scroll")
for (let btn of btns) {
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        // window.scrollBy({
        //     top: 800,
        //     left: 0,
        //     behavior : "smooth"
        // })
        document.querySelector("main").style.height = "100vh"
    });
}
// 
