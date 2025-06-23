gamemode = document.getElementById("mode").getAttribute("mode")
console.log(gamemode)

if (gamemode == "mode1") {
    console.log("using .js for gamemode 1")
    a = "LiElem1"
    b = "LiElem2"
    c = "LiElem3"
    d = "LiElem4"
    e = "LiElem5"
    f = "LiElem6"
    g = "LiElem7"
    h = "LiElem8"
    i = "LiElem9"
    j = "LiElem10"
    k = "LiElem11"
    l = "LiElem12"
    m = "LiElem13"
    n = "LiElem14"
    o = "LiElem15"
    p = "LiElem16"

    score = 0

    // let sol_words = document.getElementById("sol_words").getAttribute("odd1")
    // let sol_lang = document.getElementById("sol_lang");

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
    document.getElementById(e).addEventListener("click", function() {
        console.log(e, "was clicked");
        console.log(a, "was clicked");
        document.getElementById(e).classList.add("marked");
        document.getElementById(f).classList.remove("marked");
        document.getElementById(g).classList.remove("marked");
        document.getElementById(h).classList.remove("marked");
        }
    );
    document.getElementById(f).addEventListener("click", function() {
        console.log(f, "was clicked");
        document.getElementById(f).classList.add("marked");
        document.getElementById(e).classList.remove("marked");
        document.getElementById(g).classList.remove("marked");
        document.getElementById(h).classList.remove("marked");
        }
    );
    document.getElementById(g).addEventListener("click", function() {
        console.log(g, "was clicked");
        document.getElementById(g).classList.add("marked");
        document.getElementById(e).classList.remove("marked");
        document.getElementById(f).classList.remove("marked");
        document.getElementById(h).classList.remove("marked");
        }
    );
    document.getElementById(h).addEventListener("click", function() {
        console.log(h, "was clicked");
        document.getElementById(h).classList.add("marked");
        document.getElementById(e).classList.remove("marked");
        document.getElementById(f).classList.remove("marked");
        document.getElementById(g).classList.remove("marked");
        }
    );
    document.getElementById(i).addEventListener("click", function() {
        console.log(i, "was clicked");
        document.getElementById(i).classList.add("marked");
        document.getElementById(j).classList.remove("marked");
        document.getElementById(k).classList.remove("marked");
        document.getElementById(l).classList.remove("marked");
        }
    );
    document.getElementById(j).addEventListener("click", function() {
        console.log(j, "was clicked");
        document.getElementById(j).classList.add("marked");
        document.getElementById(i).classList.remove("marked");
        document.getElementById(k).classList.remove("marked");
        document.getElementById(l).classList.remove("marked");
        }
    );
    document.getElementById(k).addEventListener("click", function() {
        console.log(k, "was clicked");
        document.getElementById(k).classList.add("marked");
        document.getElementById(j).classList.remove("marked");
        document.getElementById(i).classList.remove("marked");
        document.getElementById(l).classList.remove("marked");
        }
    );
    document.getElementById(l).addEventListener("click", function() {
        console.log(l, "was clicked");
        document.getElementById(l).classList.add("marked");
        document.getElementById(j).classList.remove("marked");
        document.getElementById(k).classList.remove("marked");
        document.getElementById(i).classList.remove("marked");
        }
    );
    document.getElementById(m).addEventListener("click", function() {
        console.log(m, "was clicked");
        document.getElementById(m).classList.add("marked");
        document.getElementById(n).classList.remove("marked");
        document.getElementById(o).classList.remove("marked");
        document.getElementById(p).classList.remove("marked");
        }
    );
    document.getElementById(n).addEventListener("click", function() {
        console.log(n, "was clicked");
        document.getElementById(n).classList.add("marked");
        document.getElementById(m).classList.remove("marked");
        document.getElementById(o).classList.remove("marked");
        document.getElementById(p).classList.remove("marked");
        }
    );
    document.getElementById(o).addEventListener("click", function() {
        console.log(o, "was clicked");
        document.getElementById(o).classList.add("marked");
        document.getElementById(n).classList.remove("marked");
        document.getElementById(m).classList.remove("marked");
        document.getElementById(p).classList.remove("marked");
        }
    );
    document.getElementById(p).addEventListener("click", function() {
        console.log(p, "was clicked");
        document.getElementById(p).classList.add("marked");
        document.getElementById(n).classList.remove("marked");
        document.getElementById(o).classList.remove("marked");
        document.getElementById(m).classList.remove("marked");
        }
    );

    // create a for loop
    let sol_words = [];

    /*
    for (let i = 1; i <= 4; i++) {
        const word = document.getElementById("sol_words").getAttribute("odd${i}");
        sol_words.push(word);
    }
    */

    sol_words.push(document.getElementById("sol_words").getAttribute("odd1"))
    sol_words.push(document.getElementById("sol_words").getAttribute("odd2"))
    sol_words.push(document.getElementById("sol_words").getAttribute("odd3"))
    sol_words.push(document.getElementById("sol_words").getAttribute("odd4"))

    console.log(sol_words)

    const overlay = document.querySelector("#overlay");
    
    document.querySelector("#show-modal-btn").
    addEventListener("click", () => {

        overlay.style.display = "block";
        console.log("Submit button was clicked");

        clickeds = document.getElementsByClassName("marked");
        new_clickeds = []

        for (let clicked of clickeds) {
            clicked = clicked.textContent;
            console.log(typeof(clicked))
            clicked = clicked.replaceAll("\n", "");
            clicked = clicked.trim();
            new_clickeds.push(clicked);
        }

        clickeds = new_clickeds
        console.log(clickeds)

        for (const clicked of clickeds) {
            console.log(clicked)
        }


        /*let yeet = "define";*/

        for (const clicked of clickeds) {
            /*yeet = "in the for loop";*/
            /*console.log(clicked);*/
            if (sol_words.includes(clicked)) {
                score += 1;
                console.log("yee")
            }
        }

        /*
        if ((clickeds.length) = 0) {
            yeet = "no for loop";
        }*/


        sp = document.createElement("span");
        /*sp.textContent = "your score is: " + score + yeet;*/
        sp.textContent = "your score is: " + score + " out of 4";
        
        menu_button = document.createElement("button");
        menu_button.classList.add("button")
        menu_button.textContent = "Return to menu"
        menu_button.setAttribute("onclick", "window.location.href = 'http://127.0.0.1:8000/word_clouds/';");
        console.log(menu_button.textContent)

        play_again_button = document.createElement("button");
        play_again_button.textContent = "\n\nPlay again"
        play_again_button.classList.add("button")
        play_again_button.setAttribute("onclick", "window.location.reload()");
        console.log(play_again_button.textContent)

        sp.setAttribute("id", "mySpan");

        divi = document.createElement("div");
        divi.setAttribute("id", "divi");
        divi.appendChild(sp)
        document.getElementById("modal").appendChild(divi)
        document.getElementById("modal").appendChild(menu_button)
        document.getElementById("modal").appendChild(play_again_button)
        
        }
    );


} else {
    console.log("using .js for gamemode 2")
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

    const overlay = document.querySelector("#overlay");
    
    document.querySelector("#show-modal-btn").
    addEventListener("click", () => {

        overlay.style.display = "block";
    
        console.log("Submit button was clicked");

        clicked = document.getElementsByClassName("marked");
        if (clicked.length > 0) {
            clicked = clicked[0].id
        } else {
            clicked = "NONE"
        }

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

        menu_button = document.createElement("button");
        menu_button.classList.add("differentButton")
        menu_button.textContent = "Return to menu"
        menu_button.setAttribute("onclick", "window.location.href = 'http://127.0.0.1:8000/word_clouds/';");
        console.log(menu_button.textContent)

        play_again_button = document.createElement("button");
        play_again_button.textContent = "\n\nPlay again"
        play_again_button.classList.add("differentButton")
        play_again_button.setAttribute("onclick", "window.location.reload()");
        console.log(play_again_button.textContent)
        
        sp.setAttribute("id", "mySpan");

        divi = document.createElement("div");
        divi.setAttribute("id", "divi");
        divi.appendChild(sp)
        document.getElementById("modal").appendChild(divi)
        document.getElementById("modal").appendChild(menu_button)
        document.getElementById("modal").appendChild(play_again_button)
        }
    );
}


