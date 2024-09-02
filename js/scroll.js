
// import { startFetching } from "./wiki";
//
let btns = document.querySelectorAll(".scroll")
for (let btn of btns) {
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        window.scrollBy({
            top: 800,
            left: 0,
            behavior : "smooth"
        })
        // console.log("num", Math.floor(Math.random() * 1000))
    });
}
// 
