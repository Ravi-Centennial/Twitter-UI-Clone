let foryou = document.querySelector('.left')
let following = document.querySelector('.right')
let bottomline = document.getElementById("downline")
let whatishap = document.getElementById("whatishap")
let Everyone = document.getElementById("Everyone")
let whatishapborder = document.getElementById("whatishapborder")
let whatishappost = document.getElementById("whatishappost")
let whatishaplocation = document.getElementById("whatishaplocation")

whatishap.addEventListener("click", () => {
    Everyone.style.display = "block"
    whatishapborder.style.borderTopWidth = "0.2px"

})

whatishap.addEventListener("input", () => {
    if (whatishap.value.trim().length > 0) {
        whatishappost.style.opacity = '1'
        whatishappost.style.cursor = "pointer"
        whatishaplocation.style.cursor = "pointer"
        whatishaplocation.style.opacity = '1'
        whatishaplocation.style.hove

        whatishaplocation.addEventListener("mouseover", () => {
            whatishaplocation.style.backgroundColor = '#1f2937'
        })

        whatishaplocation.addEventListener("mouseout", () => {
            whatishaplocation.style.backgroundColor = 'transparent'
        })
    }
    else {
        whatishappost.style.opacity = '0.6'
        whatishaplocation.style.opacity = '0.6'
        whatishappost.style.cursor = "default"
        whatishaplocation.style.cursor = "default"

        whatishaplocation.addEventListener("mouseover", () => {
            whatishaplocation.style.backgroundColor = 'transparent'
        })
    }

})

foryou.addEventListener("click", () => {
    bottomline.style.left = '21%';
    bottomline.style.right = 'auto';
    following.style.fontWeight = "normal";
    foryou.style.fontWeight = "bold";
})

following.addEventListener("click", () => {
    bottomline.style.left = 'auto';
    bottomline.style.right = '22%';
    following.style.fontWeight = "bold";
    foryou.style.fontWeight = "normal";
})
