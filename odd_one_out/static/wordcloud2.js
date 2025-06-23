a = "ul1"
b = "ul2"
c = "ul3"
d = "ul4"


score = 0

document.getElementById(a).addEventListener("click", function() {
    console.log(a, "was clicked");
    document.getElementById(a).classList.add("marked");
    document.getElementById(b).classList.remove("marked");
    document.getElementById(c).classList.remove("marked");
    document.getElementById(d).classList.remove("marked");
    }
);
document.getElementById(b).addEventListener("click", function() {
    console.log(b, "was clicked");
    document.getElementById(b).classList.add("marked");
    document.getElementById(a).classList.remove("marked");
    document.getElementById(c).classList.remove("marked");
    document.getElementById(d).classList.remove("marked");
    }
);
document.getElementById(c).addEventListener("click", function() {
    console.log(c, "was clicked");
    document.getElementById(c).classList.add("marked");
    document.getElementById(a).classList.remove("marked");
    document.getElementById(b).classList.remove("marked");
    document.getElementById(d).classList.remove("marked");
    }
);
document.getElementById(d).addEventListener("click", function() {
    console.log(d, "was clicked");
    document.getElementById(d).classList.add("marked");
    document.getElementById(a).classList.remove("marked");
    document.getElementById(b).classList.remove("marked");
    document.getElementById(c).classList.remove("marked");
    }
);



odd_cloud = document.getElementById("sol_cloud").getAttribute("odd_cloud")
odd_cloud = "ul" + odd_cloud

console.log(odd_cloud)

submit_button = document.getElementById("getScoreButton")

submit_button.addEventListener("click", function() {
    console.log("Submit button was clicked");

    clicked = document.getElementsByClassName("marked");
    clicked = clicked[0].id

    console.log(clicked)

    if (odd_cloud == clicked) {
        console.log(odd_cloud, clicked)
        score += 1;
    }

    sp = document.createElement("span");
    /*sp.textContent = "your score is: " + score + yeet;*/
    if (score == 1) {
        sp.textContent = "Success!"
    } else {
        sp.textContent = "Better Luck next time :'("
    }

    
    document.getElementById("getScoreButton").appendChild(sp)
    }
);
