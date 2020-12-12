let createSlider = {
    numberofImage: 0,
    left: 0,
    right: 0,
    clickButtonRight: function () {
        createSlider.right.removeEventListener("click", createSlider.clickButtonRight)
        createSlider.left.removeEventListener("click", createSlider.clickButtonLeft)
        let slider = document.getElementById("slider")
        let counter = 0
        console.log(slider.scrollLeft)

        let slide = function () {
            slider.scrollBy(1, 0)
            counter++
            if (counter == 150) {
                createSlider.left.addEventListener("click", createSlider.clickButtonLeft)
                createSlider.right.addEventListener("click", createSlider.clickButtonRight)
                clearInterval(makeMove)
                if (slider.scrollLeft == 450) {
                    slider.scrollLeft = 0
                }
                createSlider.numberofImage = slider.scrollLeft / 150
                console.log(createSlider.numberofImage)

            }
        }
        let makeMove = setInterval(slide, 1)


    },

    clickButtonLeft: function () {
        createSlider.left.removeEventListener("click", createSlider.clickButtonLeft)
        createSlider.right.removeEventListener("click", createSlider.clickButtonRight)
        let slider = document.getElementById("slider")

        let counter = 0
        console.log(slider.scrollLeft)
        if (slider.scrollLeft == 0) {
            slider.scrollLeft = 450
        }
        let slide = function () {
            slider.scrollBy(-1, 0)
            counter++
            if (counter == 150) {
                createSlider.left.addEventListener("click", createSlider.clickButtonLeft)
                createSlider.right.addEventListener("click", createSlider.clickButtonRight)
                clearInterval(makeMove)
                createSlider.numberofImage = slider.scrollLeft / 150
                console.log(createSlider.numberofImage)


            }
        }
        let makeMove = setInterval(slide, 1)

    },

    usableSlider: function () {
        this.left = document.getElementById("left")
        this.right = document.getElementById("right")

        console.log(this.left, this.right)
        this.right.addEventListener("click", createSlider.clickButtonRight)
        this.left.addEventListener("click", createSlider.clickButtonLeft)
    }

}

let createDivs = "";

let createArea = {


    backgroundImage: "",
    divNumber: 0,
    winek: false,

    load: function () {

        //tworzenie menu z buttonów
        let mainDiv = document.querySelector("#main");
        let buttonDiv = document.createElement("div")
        buttonDiv.id = "menuButtonDiv"
        for (let i = 0; i < 4; i++) {
            let buttonElement = document.createElement("button");
            buttonElement.classList.add("btn" + (i + 1));
            buttonElement.classList.add("menuButton");
            buttonElement.innerText = (3 + i) + "x" + (3 + i);

            buttonDiv.appendChild(buttonElement)
        }
        mainDiv.appendChild(buttonDiv)


        //tworzenie planszy z divów dla oddzielnych buttonów
        createDivs = function () {
            if (document.getElementById("gameArea")) {
                document.getElementById("gameArea").remove()
            }
            createArea.backgroundImage = 'url(bg' + createSlider.numberofImage + ".jpg"

            createArea.divTable = []

            createArea.divNumber = parseInt(this.innerText[0])
            console.log(createArea.divNumber)
            let gameArea = document.createElement("div")
            gameArea.id = "gameArea"
            let clockArea = document.createElement("div")
            clockArea.id = "clockarea"

            if (document.getElementById("tabelka") != undefined) {
                document.getElementById("tabelka").remove()
            }
            gameArea.appendChild(clockArea)
            mainDiv.appendChild(gameArea)


            //dodawanie divów z odpowiednimi klasami jako plansza gry
            let bgPositionX = 0;
            let bgPositionY = 0;
            let positionCounter = 0
            let positionX = 250;
            let positionY = 250;



            for (let i = 0; i < createArea.divNumber * createArea.divNumber; i++) {
                let puzzleDiv = document.createElement("div")
                puzzleDiv.classList.add("number" + i)
                puzzleDiv.classList.add("puzzle")
                puzzleDiv.style.backgroundImage = createArea.backgroundImage
                puzzleDiv.dataset.value = i




                //ogarnięcie tła dla 3x3
                if (createArea.divNumber == 3) {

                    puzzleDiv.style.width = "200px";
                    puzzleDiv.style.height = "200px";
                    puzzleDiv.style.backgroundPositionX = "-" + bgPositionX + "px";
                    puzzleDiv.style.backgroundPositionY = bgPositionY + "px";

                    positionX += 300;

                    bgPositionX += 200
                    positionCounter++
                    if (positionCounter == 3) {
                        positionY += 300;
                        positionX = 250;

                        positionCounter = 0;
                    }
                    if (bgPositionX == 600) {
                        bgPositionY -= 200;
                        bgPositionX = 0;


                    }
                }
                //ogarniecie dzielenia dla 4x4
                if (createArea.divNumber == 4) {
                    puzzleDiv.style.width = "150px";
                    puzzleDiv.style.height = "150px";

                    puzzleDiv.style.backgroundPositionX = "-" + bgPositionX + "px";
                    puzzleDiv.style.backgroundPositionY = bgPositionY + "px";

                    positionX += 225;

                    bgPositionX += 150
                    positionCounter++

                    if (positionCounter == 4) {
                        positionY += 150;
                        positionX = 150;
                        positionCounter = 0;
                    }

                    if (bgPositionX == 600) {
                        bgPositionY -= 150;
                        bgPositionX = 0;
                    }
                }
                //ogarniecie dzielenia dla 5x5
                if (createArea.divNumber == 5) {
                    puzzleDiv.style.width = "120px";
                    puzzleDiv.style.height = "120px";

                    puzzleDiv.style.backgroundPositionX = "-" + bgPositionX + "px";
                    puzzleDiv.style.backgroundPositionY = bgPositionY + "px";
                    puzzleDiv.style.top = positionY + "px";
                    puzzleDiv.style.left = positionX + "px";
                    positionX += 120;


                    bgPositionX += 120
                    positionCounter++

                    if (positionCounter == 5) {
                        positionY += 120;
                        positionX = 250;
                        positionCounter = 0;
                    }
                    if (bgPositionX == 600) {
                        bgPositionY -= 120;
                        bgPositionX = 0;
                    }

                }

                if (createArea.divNumber == 6) {
                    puzzleDiv.style.width = "100px";
                    puzzleDiv.style.height = "100px";

                    puzzleDiv.style.backgroundPositionX = "-" + bgPositionX + "px";
                    puzzleDiv.style.backgroundPositionY = bgPositionY + "px";
                    puzzleDiv.style.top = positionY + "px";
                    puzzleDiv.style.left = positionX + "px";
                    positionX += 100;


                    bgPositionX += 100
                    positionCounter++

                    if (positionCounter == 6) {
                        positionY += 100;
                        positionX = 200;
                        positionCounter = 0;
                    }
                    if (bgPositionX == 600) {
                        bgPositionY -= 100;
                        bgPositionX = 0;
                    }
                }



                if (i + 1 == createArea.divNumber * createArea.divNumber) {
                    puzzleDiv.id = "blacksquare"
                    puzzleDiv.style.backgroundImage = ""
                    puzzleDiv.style.backgroundColor = "black"

                }
                document.getElementById("gameArea").appendChild(puzzleDiv)

            }
            createArea.gameClick()

        }
        //dodanie listenerów do buttonów
        let buttons = document.getElementsByClassName("menuButton");
        console.log(buttons)
        for (i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", createDivs);

        }


    }
    ,
    divTable: [],
    clickableTable: [],

    gameClick: function () {
        //zmienne te będą potrzebne potem
        let puzzles = document.getElementsByClassName("puzzle")
        let blackPuzzle = "";
        let blackNumber = "";





        let gameMechanix = {

            puzzleClear: function () {
                blackPuzzle = document.getElementById("blacksquare")
                blackNumber = blackPuzzle.classList[0].replace('number', '')

                console.log(blackPuzzle, blackNumber)
            },

            checkWin: function () {
                //stworzenie tablicy z datasetów
                let winTable = []
                let counter = -1
                for (let i = 0; i < puzzles.length; i++) {
                    if (i % createArea.divNumber == 0 || i == 0) {
                        winTable.push([])
                        counter++
                    }
                    winTable[counter].push(parseInt(puzzles[i].dataset.value))
                }
                console.log(winTable, createArea.divTable)

                let winner = 0
                for (let i = 0; i < createArea.divNumber; i++) {
                    for (let j = 0; j < createArea.divNumber; j++) {
                        if (winTable[i][j] != createArea.divTable[i][j]) {
                            winner++
                        }
                    }


                }

                if (winner == 0) {

                    for (let i = 0; i < puzzles.length; i++) {
                        puzzles[i].removeEventListener("click", gameMechanix.puzzleClick)
                    }
                    createArea.winek = true;


                }
            },

            changePuzzles: function (e) {

                if (createArea.clickableTable.includes(parseInt(e.classList[0].replace("number", "")))) {
                    console.log("clickable")
                    let puzzleBgPosition = e.style.backgroundPosition
                    let elDataset = e.dataset.value

                    //zamiana wszystkich wartosci dla klikniętego kafelka
                    e.style.backgroundImage = ""
                    e.style.backgroundColor = "black"
                    e.dataset.value = blackPuzzle.dataset.value
                    e.id = "blacksquare"

                    //zamiana wszystkich wartosci dla czarnego kafelka
                    blackPuzzle.id = ""
                    blackPuzzle.style.backgroundImage = createArea.backgroundImage
                    blackPuzzle.style.backgroundPosition = puzzleBgPosition
                    blackPuzzle.dataset.value = elDataset



                }
                else {
                    console.log(createArea.clickableTable)
                }
            },

            checkDemPuzzlez: function () {
                blackPuzzle = document.getElementById("blacksquare")
                blackNumber = blackPuzzle.classList[0].replace('number', '')
                createArea.clickableTable = []
                for (let i = 0; i < createArea.divTable.length; i++) {
                    for (let j = 0; j < createArea.divTable.length; j++) {
                        if (createArea.divTable[i][j] == blackNumber) {

                            if (i + 1 < createArea.divNumber) {
                                createArea.clickableTable.push(createArea.divTable[i + 1][j])
                            }
                            if (i - 1 >= 0) {

                                createArea.clickableTable.push(createArea.divTable[i - 1][j])
                            }
                            if (j + 1 < createArea.divTable.length) {
                                createArea.clickableTable.push(createArea.divTable[i][j + 1])
                            }
                            if (j - 1 >= 0) {
                                createArea.clickableTable.push(createArea.divTable[i][j - 1])
                            }
                        }
                    }
                }
            },


            //mieszanie puzelków
            puzzleShuffle: function () {
                let stopownik = 0
                let zabezpieczenie = document.getElementsByClassName("menuButton")

                for (let p = 0; p < zabezpieczenie.length; p++) {
                    zabezpieczenie[p].removeEventListener("click", createDivs)
                }
                //funkcja mieszania 1 puzelka
                let shuffler = function () {

                    gameMechanix.checkDemPuzzlez()
                    let randomNumber = Math.floor(Math.random() * (createArea.clickableTable.length));
                    stopownik++
                    console.log(createArea.clickableTable[randomNumber])
                    gameMechanix.changePuzzles(puzzles[createArea.clickableTable[randomNumber]])
                    if (stopownik == 50) {
                        createArea.winek = false;
                        clearInterval(shuffling)
                        clearInterval(createTimer.timing)

                        createTimer.makeTimer()
                        for (let p = 0; p < zabezpieczenie.length; p++) {
                            zabezpieczenie[p].addEventListener("click", createDivs)
                        }
                    }

                }

                let shuffling = setInterval(shuffler, 30)



            },


            //kliknięcie puzelka
            puzzleClick: function () {
                gameMechanix.checkDemPuzzlez();
                gameMechanix.changePuzzles(this);
                setTimeout(gameMechanix.checkWin, 10);

            }
        }

        //dodanie klikania puzzli 
        let divCounter = -1

        for (let i = 0; i < puzzles.length; i++) {
            puzzles[i].addEventListener("click", gameMechanix.puzzleClick)
            if (i % this.divNumber == 0 || i == 0) {
                this.divTable.push([])
                divCounter++
            }
            this.divTable[divCounter].push(i)
        }

        gameMechanix.puzzleShuffle()

        console.log(this.divTable)


    }

}

let createTimer = {

    clockArea: "",
    currentTime: "",
    timing: "",
    cookieClock: "",
    //tworzenie struktury timerka
    makeTimer: function () {
        createTimer.clockArea = document.getElementById("clockarea")
        let dateStart = new Date();
        dateStart = dateStart.getTime()



        let makeBoxes = function () {
            //stworzenie godzin
            let colon = document.createElement("div")
            colon.classList.add("colon")
            for (let i = 0; i < 2; i++) {
                let hourDiv = document.createElement("div")
                hourDiv.classList.add("hour")
                hourDiv.classList.add("timer")
                createTimer.clockArea.appendChild(hourDiv)
            }
            createTimer.clockArea.appendChild(colon)

            //stworzenie minut
            let colon2 = document.createElement("div")
            colon2.classList.add("colon")
            for (let i = 0; i < 2; i++) {
                let minsDiv = document.createElement("div")
                minsDiv.classList.add("mins")
                minsDiv.classList.add("timer")
                createTimer.clockArea.appendChild(minsDiv)
            }


            //stworzenie sekund
            createTimer.clockArea.appendChild(colon2)
            let dot = document.createElement("div")
            dot.classList.add("dot")

            for (let i = 0; i < 2; i++) {
                let secsDiv = document.createElement("div")
                secsDiv.classList.add("secs")
                secsDiv.classList.add("timer")
                createTimer.clockArea.appendChild(secsDiv)
            }

            createTimer.clockArea.appendChild(dot)

            //stworzenie milisekund
            for (let i = 0; i < 3; i++) {
                let milisecsDiv = document.createElement("div")
                milisecsDiv.classList.add("milisecs")
                milisecsDiv.classList.add("timer")
                createTimer.clockArea.appendChild(milisecsDiv)
            }



        }
        makeBoxes()
        let endDate = function () {
            let dateNow = new Date();
            dateNow = dateNow.getTime()
            let time = new Date(dateNow - dateStart)
            let milis = time.getMilliseconds()
            let seconds = time.getSeconds()
            let mins = time.getMinutes()
            let hours = time.getHours() - 1

            let hourDivs = document.getElementsByClassName("hour")
            let minsDivs = document.getElementsByClassName("mins")
            let secsDivs = document.getElementsByClassName("secs")
            let milisecsDivs = document.getElementsByClassName("milisecs")


            //zmiana obrasssków

            //zmiana godzin
            if (hours < 10) {
                hourDivs[0].style.backgroundImage = 'url(cyferki/c0.gif)'
                hourDivs[1].style.backgroundImage = 'url(cyferki/c' + hours + '.gif)'
                hours = "0" + hours
            }
            else {
                hourDivs[0].style.backgroundImage = 'url(cyferki/c' + String(hours)[0] + '.gif)'
                hourDivs[1].style.backgroundImage = 'url(cyferki/c' + String(hours)[1] + '.gif)'
            }

            //zmiana minut
            if (mins < 10) {

                minsDivs[0].style.backgroundImage = 'url(cyferki/c0.gif)'
                minsDivs[1].style.backgroundImage = 'url(cyferki/c' + mins + '.gif)'
                mins = "0" + mins
            }
            else {
                minsDivs[0].style.backgroundImage = 'url(cyferki/c' + String(mins)[0] + '.gif)'
                minsDivs[1].style.backgroundImage = 'url(cyferki/c' + String(mins)[1] + '.gif)'

            }

            //zmiana sekund
            if (seconds < 10) {

                secsDivs[0].style.backgroundImage = 'url(cyferki/c0.gif)'
                secsDivs[1].style.backgroundImage = 'url(cyferki/c' + seconds + '.gif)'
                seconds = "0" + seconds
            }
            else {
                secsDivs[0].style.backgroundImage = 'url(cyferki/c' + String(seconds)[0] + '.gif)'
                secsDivs[1].style.backgroundImage = 'url(cyferki/c' + String(seconds)[1] + '.gif)'
            }

            //zmiana milisekund
            if (milis < 10) {

                milisecsDivs[0].style.backgroundImage = 'url(cyferki/c0.gif)'
                milisecsDivs[1].style.backgroundImage = 'url(cyferki/c0.gif)'
                milisecsDivs[2].style.backgroundImage = 'url(cyferki/c' + milis + '.gif)'
                milis = "00" + milis
            }
            else if (milis < 100) {
                milisecsDivs[0].style.backgroundImage = 'url(cyferki/c0.gif)'
                milisecsDivs[1].style.backgroundImage = 'url(cyferki/c' + String(milis)[0] + '.gif)'
                milisecsDivs[2].style.backgroundImage = 'url(cyferki/c' + String(milis)[1] + '.gif)'
                milis = "0" + milis
            }
            else {
                milisecsDivs[0].style.backgroundImage = 'url(cyferki/c' + String(milis)[0] + '.gif)'
                milisecsDivs[1].style.backgroundImage = 'url(cyferki/c' + String(milis)[1] + '.gif)'
                milisecsDivs[2].style.backgroundImage = 'url(cyferki/c' + String(milis)[2] + '.gif)'
            }



            createTimer.currentTime = hours.toString() + ":" + mins.toString() + ":" + seconds.toString() + "." + milis.toString()

            if (createArea.winek == true) {


                createTimer.cookieClock = String(createTimer.currentTime)
                console.log(createTimer.cookieClock)
                clearInterval(createTimer.timing)
                setTimeout(cookieBoys.createCookie, 50)
            }
        }

        createTimer.timing = setInterval(endDate, 1)
    }

}

let cookieBoys = {
    cookieTable: [],
    timeTable: [],
    createCookie: function () {
        let expiredate = new Date()
        expiredate.setTime(expiredate.getTime() + (1000 * 60 * 60 * 24 * 30))
        let nickname = encodeURIComponent(prompt("podaj nick"))

        function getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        cookieBoys.timeTable = []
        cookieBoys.cookieTable = []
        let cookieBody = getCookie(String(createArea.divNumber))
        console.log(cookieBody)

        document.cookie = createArea.divNumber + "=" + createTimer.cookieClock + "$" + nickname + "|" + cookieBody + ";expires=" + expiredate.toUTCString()

        cookieBody = getCookie(String(createArea.divNumber))
        cookieBody = cookieBody.split("|")

        cookieBody.pop()

        for (let i = 0; i < cookieBody.length; i++) {
            cookieBody[i] = cookieBody[i].split("$")
        }
        console.log(cookieBody)

        console.log(cookieBody.length)
        for (let i = 0; i < cookieBody.length; i++) {
            let temporary = cookieBody[i]
            let cookieObject = { cookieTime: "", cookieNick: "" }
            cookieObject.cookieTime = temporary[0]
            cookieObject.cookieNick = temporary[1]
            console.log(cookieObject)
            cookieBoys.cookieTable.push(cookieObject)
            cookieBoys.timeTable.push(temporary[0])
        }
        console.log(cookieBody)
        console.log(cookieBoys.cookieTable)
        cookieBoys.timeTable = cookieBoys.timeTable.sort()
        console.log(cookieBoys.timeTable)

        if (cookieBoys.timeTable.length > 10) {
            let popped = cookieBoys.timeTable.pop()
            for (let i = 0; i < cookieBoys.cookieTable.length; i++) {
                if (cookieBoys.cookieTable[i].cookieTime == popped) {
                    cookieBoys.cookieTable.splice(i, 1)
                }
            }
        }
        console.log(cookieBoys.cookieTable)
        function glueCookie(table) {
            let string = ""
            for (let i = 0; i < table.length; i++) {
                string += table[i].cookieTime + "$" + table[i].cookieNick + "|"
            }
            return string;
        }
        restOfCookie = glueCookie(cookieBoys.cookieTable)
        console.log(glueCookie(cookieBoys.cookieTable))
        console.log(cookieBoys.cookieTable)
        console.log(cookieBoys.timeTable)

        document.cookie = createArea.divNumber + "=" + restOfCookie + ";expires=" + expiredate.toUTCString()
        cookieBoys.createRecords()


    },

    createRecords: function () {
        if (document.getElementById("tabelka") != undefined) {
            document.getElementById("tabelka").remove()
        }
        let div = document.createElement("div")
        div.id = "tabelka"

        let info = document.createElement("div")
        info.className = "info"
        info.innerHTML = "Twój czas wynosi " + createTimer.cookieClock
        div.appendChild(info)

        let table = document.createElement("table")
        let thtr = document.createElement("tr")
        let th1 = document.createElement("th")
        let th2 = document.createElement("th")
        let th3 = document.createElement("th")

        th1.innerText = "Miejsce"
        th2.innerText = "Czas"
        th3.innerText = "Nick"

        thtr.appendChild(th1)
        thtr.appendChild(th2)
        thtr.appendChild(th3)

        table.appendChild(thtr)



        for (let i = 0; i < 10; i++) {

            let tr = document.createElement("tr")

            let td = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")

            td.innerHTML = i + 1

            if (i >= cookieBoys.timeTable.length) {
                td2.innerHTML = ""
            }
            else {
                td2.innerHTML = cookieBoys.timeTable[i]
            }

            for (let k = 0; k < cookieBoys.timeTable.length; k++) {
                if (cookieBoys.cookieTable[k].cookieTime == cookieBoys.timeTable[i]) {

                    if (i >= cookieBoys.timeTable.length) {
                        td3.innerHTML = ""
                    }
                    else {
                        td3.innerHTML = cookieBoys.cookieTable[k].cookieNick
                    }
                }
            }
            tr.appendChild(td)
            tr.appendChild(td2)
            tr.appendChild(td3)

            table.appendChild(tr)
        }
        console.log(table)
        div.appendChild(table)
        document.getElementById("main").appendChild(div)

    }
}

