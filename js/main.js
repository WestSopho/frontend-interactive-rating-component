var ratingDiv = document.getElementById("rating");
var user1 = document.getElementById("user1")
var user2 = document.getElementById("user2")
var clickable

function modifySibling(x){
    x.classList.remove("bg-dark-blue")
    x.classList.add("bg-medium-grey")
    x.classList.add("text-white")
}
function returnSibling(x){
    x.classList.remove("bg-medium-grey")
    x.classList.remove("text-white")
    x.classList.add("bg-dark-blue")
}

ratingDiv.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("bg-dark-blue")){
        scoreDiv = event.target
        leftDiv = scoreDiv.previousElementSibling
        rightDiv = scoreDiv.nextElementSibling

        if(leftDiv && rightDiv){
            if(!leftDiv.classList.contains("clicked")){
                modifySibling(leftDiv)
            }
            if(!rightDiv.classList.contains("clicked")){
                modifySibling(rightDiv)
            }
        }
        else if(leftDiv && !rightDiv && !(leftDiv.classList.contains("clicked"))){
            modifySibling(leftDiv)
        }
        else if(!leftDiv && rightDiv && !(rightDiv.classList.contains("clicked"))){
            modifySibling(rightDiv)
        }
    }
});

ratingDiv.addEventListener("mouseout", (e) =>{
    if(e.target.classList.contains("bg-dark-blue")){
        scoreDiv = e.target
        leftDiv = scoreDiv.previousElementSibling
        rightDiv = scoreDiv.nextElementSibling

        if(leftDiv && rightDiv){
            if(!leftDiv.classList.contains("clicked")){
                returnSibling(leftDiv)
            }
            if(!rightDiv.classList.contains("clicked")){
                returnSibling(rightDiv)
            }
        }
        else if(leftDiv && !rightDiv && !(leftDiv.classList.contains("clicked"))){
            returnSibling(leftDiv)
        }
        else if(!leftDiv && rightDiv && !(rightDiv.classList.contains("clicked"))){
            returnSibling(rightDiv)
        }
    }
})

ratingDiv.addEventListener("click", (e) =>{
    if(e.target.classList.contains("bg-dark-blue") || e.target.classList.contains("bg-orange")){
        scoreDiv = e.target
        leftDiv = scoreDiv.previousElementSibling
        rightDiv = scoreDiv.nextElementSibling

        if(!scoreDiv.classList.contains("clicked")){
            scoreDiv.classList.add("clicked")
            scoreDiv.classList.remove("bg-dark-blue")
            scoreDiv.classList.remove("text-medium-grey")
            scoreDiv.classList.add("bg-orange")
            scoreDiv.classList.add("text-pure-white")
            scoreDiv.classList.add("font-bold")
        }
        else if(scoreDiv.classList.contains("clicked")){
            scoreDiv.classList.remove("clicked")
            scoreDiv.classList.add("bg-dark-blue")
            scoreDiv.classList.add("text-medium-grey")
            scoreDiv.classList.remove("bg-orange")
            scoreDiv.classList.remove("text-pure-white")
            scoreDiv.classList.remove("font-bold")
        }

        if(leftDiv && rightDiv){
            returnSibling(leftDiv)
            returnSibling(rightDiv)
        }
        else if(leftDiv && !rightDiv){
            returnSibling(leftDiv)
        }
        else if(!leftDiv && rightDiv){
            returnSibling(rightDiv)
        }
    }
})

document.getElementById("submit").addEventListener("click", () =>{
    var s = ratingDiv.querySelector(".clicked").innerText
    user1.classList.add("hidden")
    user2.classList.remove("hidden")
    user2.classList.add("animate-fade")
    document.getElementById("score").innerText = s
})