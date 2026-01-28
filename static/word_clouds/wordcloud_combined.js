gamemode = document.getElementById("mode").getAttribute("mode")
console.log(gamemode)
difficulty = document.getElementById("difficulty").getAttribute("difficulty")
console.log(difficulty)
words1 = document.getElementById("words1").getAttribute("words1")
console.log(words1)
words2 = document.getElementById("words2").getAttribute("words2")
console.log(words2)
words3 = document.getElementById("words3").getAttribute("words3")
console.log(words3)
words4 = document.getElementById("words4").getAttribute("words4")
console.log(words4)
words_reference = document.getElementById("words_reference").getAttribute("words_reference")
console.log(words_reference)
lang_codes_custom = document.getElementById("lang_codes_custom").getAttribute("lang_codes_custom")
console.log(lang_codes_custom)
families = document.getElementById("families").getAttribute("families")
console.log(families)



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
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(e).click();
            document.getElementById(i).click();
            document.getElementById(m).click();
        }
    }
    );
    document.getElementById(b).addEventListener("click", function() {
        console.log(b, "was clicked");
        document.getElementById(b).classList.add("marked");
        document.getElementById(a).classList.remove("marked");
        document.getElementById(c).classList.remove("marked");
        document.getElementById(d).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(f).click();
            document.getElementById(j).click();
            document.getElementById(n).click();
            }
        }
    );
    document.getElementById(c).addEventListener("click", function() {
        console.log(c, "was clicked");
        document.getElementById(c).classList.add("marked");
        document.getElementById(a).classList.remove("marked");
        document.getElementById(b).classList.remove("marked");
        document.getElementById(d).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(g).click();
            document.getElementById(k).click();
            document.getElementById(o).click();
            }
        }
    );
    document.getElementById(d).addEventListener("click", function() {
        console.log(d, "was clicked");
        document.getElementById(d).classList.add("marked");
        document.getElementById(a).classList.remove("marked");
        document.getElementById(b).classList.remove("marked");
        document.getElementById(c).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(h).click();
            document.getElementById(l).click();
            document.getElementById(p).click();
            }
        }
    );
    document.getElementById(e).addEventListener("click", function() {
        console.log(e, "was clicked");
        document.getElementById(e).classList.add("marked");
        document.getElementById(f).classList.remove("marked");
        document.getElementById(g).classList.remove("marked");
        document.getElementById(h).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(a).click();
            document.getElementById(i).click();
            document.getElementById(m).click();
        }
        }
    );
    document.getElementById(f).addEventListener("click", function() {
        console.log(f, "was clicked");
        document.getElementById(f).classList.add("marked");
        document.getElementById(e).classList.remove("marked");
        document.getElementById(g).classList.remove("marked");
        document.getElementById(h).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(b).click();
            document.getElementById(j).click();
            document.getElementById(n).click();
            }
        }
    );
    document.getElementById(g).addEventListener("click", function() {
        console.log(g, "was clicked");
        document.getElementById(g).classList.add("marked");
        document.getElementById(e).classList.remove("marked");
        document.getElementById(f).classList.remove("marked");
        document.getElementById(h).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(c).click();
            document.getElementById(k).click();
            document.getElementById(o).click();
            }
        }
    );
    document.getElementById(h).addEventListener("click", function() {
        console.log(h, "was clicked");
        document.getElementById(h).classList.add("marked");
        document.getElementById(e).classList.remove("marked");
        document.getElementById(f).classList.remove("marked");
        document.getElementById(g).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(d).click();
            document.getElementById(l).click();
            document.getElementById(p).click();
            }
        }
    );
    document.getElementById(i).addEventListener("click", function() {
        console.log(i, "was clicked");
        document.getElementById(i).classList.add("marked");
        document.getElementById(j).classList.remove("marked");
        document.getElementById(k).classList.remove("marked");
        document.getElementById(l).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(a).click();
            document.getElementById(e).click();
            document.getElementById(m).click();
        }
        }
    );
    document.getElementById(j).addEventListener("click", function() {
        console.log(j, "was clicked");
        document.getElementById(j).classList.add("marked");
        document.getElementById(i).classList.remove("marked");
        document.getElementById(k).classList.remove("marked");
        document.getElementById(l).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(b).click();
            document.getElementById(f).click();
            document.getElementById(n).click();
            }
    }
    );
    document.getElementById(k).addEventListener("click", function() {
        console.log(k, "was clicked");
        document.getElementById(k).classList.add("marked");
        document.getElementById(j).classList.remove("marked");
        document.getElementById(i).classList.remove("marked");
        document.getElementById(l).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(c).click();
            document.getElementById(g).click();
            document.getElementById(o).click();
            }
        }
    );
    document.getElementById(l).addEventListener("click", function() {
        console.log(l, "was clicked");
        document.getElementById(l).classList.add("marked");
        document.getElementById(j).classList.remove("marked");
        document.getElementById(k).classList.remove("marked");
        document.getElementById(i).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(d).click();
            document.getElementById(h).click();
            document.getElementById(p).click();
            }
        }
    );
    document.getElementById(m).addEventListener("click", function() {
        console.log(m, "was clicked");
        document.getElementById(m).classList.add("marked");
        document.getElementById(n).classList.remove("marked");
        document.getElementById(o).classList.remove("marked");
        document.getElementById(p).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(a).click();
            document.getElementById(e).click();
            document.getElementById(i).click();
        }
        }
    );
    document.getElementById(n).addEventListener("click", function() {
        console.log(n, "was clicked");
        document.getElementById(n).classList.add("marked");
        document.getElementById(m).classList.remove("marked");
        document.getElementById(o).classList.remove("marked");
        document.getElementById(p).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(b).click();
            document.getElementById(f).click();
            document.getElementById(j).click();
            }
        }
    );
    document.getElementById(o).addEventListener("click", function() {
        console.log(o, "was clicked");
        document.getElementById(o).classList.add("marked");
        document.getElementById(n).classList.remove("marked");
        document.getElementById(m).classList.remove("marked");
        document.getElementById(p).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(c).click();
            document.getElementById(g).click();
            document.getElementById(k).click();
            }
        }
    );
    document.getElementById(p).addEventListener("click", function() {
        console.log(p, "was clicked");
        document.getElementById(p).classList.add("marked");
        document.getElementById(n).classList.remove("marked");
        document.getElementById(o).classList.remove("marked");
        document.getElementById(m).classList.remove("marked");
        // Simulate clicks on e, i, and m
        if (difficulty !== "hard") {
            document.getElementById(d).click();
            document.getElementById(h).click();
            document.getElementById(l).click();
            }
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
            console.log("CLICKED:" + clicked)
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



        // Style the span based on score
        if (score === 4) {
            sp.style.backgroundColor = "#b2f2bb";
        } else if (score === 3) {
            sp.style.backgroundColor = "#d1e0a2";
        } else if (score === 2) {
            sp.style.backgroundColor = "#fff3bf";
        } else if (score === 1) {
            sp.style.backgroundColor = "#ffd8a8";
        } else {
            sp.style.backgroundColor = "#ffa8a8";
        }
        
// Create solution div
        let solutions_div = document.createElement("div");
        let solutions_paragraph = document.createElement("p");
        solutions_paragraph.textContent = "";
        solutions_div.appendChild(solutions_paragraph);

        // Helper styling
        function styleCell(cell) {
            cell.style.border = "1px solid black";
            cell.style.padding = "6px 12px";
            cell.style.textAlign = "center";
        }

        // Parse the variables
        let langNames = JSON.parse(lang_codes_custom.replace(/'/g, '"'));   // ['telugu', 'kannada', ...]
        let familiesList = JSON.parse(families.replace(/'/g, '"'));         // ['dravidian', 'dravidian', ...]
        let w1 = JSON.parse(words1.replace(/'/g, '"'));                     // word list 1 (first column)
        let w2 = JSON.parse(words2.replace(/'/g, '"'));
        let w3 = JSON.parse(words3.replace(/'/g, '"'));
        let w4 = JSON.parse(words4.replace(/'/g, '"'));

        let words_ls = [w1, w2, w3, w4]

        let rows = langNames.map((lang, i) => ({
            label: `${lang} (${familiesList[i]})`,
            words: words_ls[i]
        }));

        // Create table
        let table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        table.style.margin = "20px auto";

        let tableContainer = document.createElement("div");
        tableContainer.style.textAlign = "center";

        // Header
        // Parse words_reference string to an actual array
        let referenceWords = JSON.parse(words_reference.replace(/'/g, '"'));

        // Create the header row
        let headerRow = document.createElement("tr");

        // First (top-left) empty corner cell
        let emptyCell = document.createElement("th");
        emptyCell.textContent = "";
        styleCell(emptyCell);
        headerRow.appendChild(emptyCell);

        // Then use actual reference words for column headers
        referenceWords.forEach(text => {
            let th = document.createElement("th");
            th.textContent = text;
            styleCell(th);
            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);

        // Rows
        rows.forEach((row, rowIndex) => {
            let tr = document.createElement("tr");

            let labelCell = document.createElement("td");
            labelCell.textContent = row.label;
            styleCell(labelCell);
            tr.appendChild(labelCell);

            row.words.forEach((word, wordIndex) => {
                let td = document.createElement("td");
                td.textContent = word;
                styleCell(td);
                console.log(rowIndex)
                if (clickeds.includes(word) && sol_words.includes(word) && rowIndex == 3) {
                    td.style.backgroundColor = "#b2f2bb";  // light green
                } else if (sol_words.includes(word) && !clickeds.includes(word) && rowIndex == 3) {
                    td.style.backgroundColor = "#ffa8a8";  // light red
                }
                tr.appendChild(td);
            });

            table.appendChild(tr);
        });

        sp.setAttribute("id", "mySpan");

        tableContainer.appendChild(table);
        solutions_div.appendChild(tableContainer);

        // Create button container
        let button_container = document.createElement("div");
        button_container.style.display = "flex";
        button_container.style.justifyContent = "center";
        button_container.style.gap = "20px";

        // Create buttons
        let menu_button = document.createElement("button");
        menu_button.classList.add("differentButton");
        menu_button.textContent = "Return to menu";
        menu_button.setAttribute(
        "onclick",
        "window.location.href = '/word_clouds/';"
        );


        let play_again_button = document.createElement("button");
        play_again_button.textContent = "Play again";
        play_again_button.classList.add("differentButton");
        play_again_button.setAttribute("onclick", "window.location.reload()");

        // Append buttons to container
        button_container.appendChild(menu_button);
        button_container.appendChild(play_again_button);

        // Final wrapper
        let divi = document.createElement("div");
        divi.setAttribute("id", "divi");
        divi.appendChild(sp);
        divi.appendChild(solutions_div);
        divi.appendChild(button_container);

        // Append everything to modal
        document.getElementById("modal").appendChild(divi);
        
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

        // Create the span for result
        let sp = document.createElement("span");
        if (score == 1) {
            sp.textContent = "Success!";
            sp.style.backgroundColor = "#b2f2bb";
            clickResults = [[0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [1, 1, 1, 1]]
        } else {
            sp.textContent = "Better Luck next time :'(";
            sp.style.backgroundColor = "#ffa8a8";
            clickResults = [[0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.5], [0, 0, 0, 0]]
        }
        sp.setAttribute("id", "mySpan");

        // Create solution div
        let solutions_div = document.createElement("div");
        let solutions_paragraph = document.createElement("p");
        solutions_paragraph.textContent = "";
        solutions_div.appendChild(solutions_paragraph);

        // Helper styling
        function styleCell(cell) {
            cell.style.border = "1px solid black";
            cell.style.padding = "6px 12px";
            cell.style.textAlign = "center";
        }

        // Parse the variables
        let langNames = JSON.parse(lang_codes_custom.replace(/'/g, '"'));   // ['telugu', 'kannada', ...]
        let familiesList = JSON.parse(families.replace(/'/g, '"'));         // ['dravidian', 'dravidian', ...]
        let w1 = JSON.parse(words1.replace(/'/g, '"'));                     // word list 1 (first column)
        let w2 = JSON.parse(words2.replace(/'/g, '"'));
        let w3 = JSON.parse(words3.replace(/'/g, '"'));
        let w4 = JSON.parse(words4.replace(/'/g, '"'));

        let words_ls = [w1, w2, w3, w4]

        let rows = langNames.map((lang, i) => ({
            label: `${lang} (${familiesList[i]})`,
            words: words_ls[i]
        }));

        // Create table
        let table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        table.style.margin = "20px auto";

        let tableContainer = document.createElement("div");
        tableContainer.style.textAlign = "center";

        // Header
        // Parse words_reference string to an actual array
        let referenceWords = JSON.parse(words_reference.replace(/'/g, '"'));

        // Create the header row
        let headerRow = document.createElement("tr");

        // First (top-left) empty corner cell
        let emptyCell = document.createElement("th");
        emptyCell.textContent = "";
        styleCell(emptyCell);
        headerRow.appendChild(emptyCell);

        // Then use actual reference words for column headers
        referenceWords.forEach(text => {
            let th = document.createElement("th");
            th.textContent = text;
            styleCell(th);
            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);


        // Rows
        rows.forEach((row, rowIndex) => {
            let tr = document.createElement("tr");

            let labelCell = document.createElement("td");
            labelCell.textContent = row.label;
            styleCell(labelCell);
            tr.appendChild(labelCell);

            row.words.forEach((word, wordIndex) => {
                let td = document.createElement("td");
                td.textContent = word;
                styleCell(td);
                if (score == 1 && clickResults[rowIndex][wordIndex] === 1) {
                    td.style.backgroundColor = "#b2f2bb";  // light green
                } else if (clickResults[rowIndex][wordIndex] === 0) {
                    td.style.backgroundColor = "#ffa8a8";  // light red
                }
                tr.appendChild(td);
            });

            table.appendChild(tr);
        });

        tableContainer.appendChild(table);
        solutions_div.appendChild(tableContainer);

        // Create button container
        let button_container = document.createElement("div");
        button_container.style.display = "flex";
        button_container.style.justifyContent = "center";
        button_container.style.gap = "20px";

        // Create buttons
        let menu_button = document.createElement("button");
        menu_button.classList.add("differentButton");
        menu_button.textContent = "Return to menu";
        menu_button.setAttribute("onclick", "window.location.href = 'http://127.0.0.1:8000/word_clouds/';");

        let play_again_button = document.createElement("button");
        play_again_button.textContent = "Play again";
        play_again_button.classList.add("differentButton");
        play_again_button.setAttribute("onclick", "window.location.reload()");

        // Append buttons to container
        button_container.appendChild(menu_button);
        button_container.appendChild(play_again_button);

        // Final wrapper
        let divi = document.createElement("div");
        divi.setAttribute("id", "divi");
        divi.appendChild(sp);
        divi.appendChild(solutions_div);
        divi.appendChild(button_container);

        // Append everything to modal
        document.getElementById("modal").appendChild(divi);

        }
    );
}


