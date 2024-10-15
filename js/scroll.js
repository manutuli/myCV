


let btns = document.querySelectorAll(".scroll")
for (let btn of btns) {
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        e.target.scroll({
            top: 20,
            left: 0,
            behavior : "smooth"
        })
        console.log("test",e.target)
    });
}
// 
