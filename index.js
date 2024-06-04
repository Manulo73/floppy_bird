// HTML objects
const playerBody = document.getElementById("player")
const gameDiv = document.getElementById("gameDiv")
const birdModel = document.getElementById("bird")
const obstacleClass = document.getElementsByClassName("obstacle")
const menuDiv = document.getElementById("menuDiv")
const playBtn = document.getElementById("playBtn")
const customBtn = document.getElementById("customBtn")
const volumeBtn = document.getElementById("volumeBtn")
const spaceAd = document.getElementById("readyDiv")
const scoreDiv = document.getElementById("scoreDiv")
const scoreDisplay = document.getElementById("scoreNumber")
const customisationDiv = document.getElementById("customisationDiv")
const backBtn = document.getElementById("backBtn")
const yellowBtn = document.getElementById("yellowBtn")
const greenBtn = document.getElementById("greenBtn")
const blueBtn = document.getElementById("blueBtn")
const redBtn = document.getElementById("redBtn")
const blackBtn = document.getElementById("blackBtn")
const demoBird = document.getElementById("yourBirdImg")
const goMenuBtn = document.getElementById("goMenuBtn")
const retryBtn = document.getElementById("tryAgainBtn")
const deathDiv = document.getElementById("deathDiv")
const yourScoreDeath = document.getElementById("yourScore")
const rainbowBtn = document.getElementById("rainbowBtn")
const goldBtn = document.getElementById("goldBtn")
const okBtn = document.getElementById("okBtn")
const lockedTitle = document.getElementById("lkTitle")
const lockedDiv = document.getElementById("lockedDiv")

const u301 = document.getElementById("u301")
const u302 = document.getElementById("u302")
const u303 = document.getElementById("u303")
const d301 = document.getElementById("d301")
const d302 = document.getElementById("d302")
const d303 = document.getElementById("d303")
const u201 = document.getElementById("u201")
const u202 = document.getElementById("u202")
const u203 = document.getElementById("u203")
const d201 = document.getElementById("d201")
const d202 = document.getElementById("d202")
const d203 = document.getElementById("d203")
const u101 = document.getElementById("u101")
const u102 = document.getElementById("u102")
const u103 = document.getElementById("u103")
const d101 = document.getElementById("d101")
const d102 = document.getElementById("d102")
const d103 = document.getElementById("d103")

// Variables
let posY = (parseInt(window.getComputedStyle(playerBody).getPropertyValue("top")))
let level = 0
let gC // gravity interval
let srcToggle = true // toggle for bird image
let isStarted = false
let isAlive = false
let isReady = false
let isMuted = false

let IsActiveU303 = false
let IsActiveU302 = false
let IsActiveU301 = false
let IsActiveU203 = false
let IsActiveU202 = false
let IsActiveU201 = false
let IsActiveU103 = false
let IsActiveU102 = false
let IsActiveU101 = false
let IsActiveD303 = false
let IsActiveD302 = false
let IsActiveD301 = false
let IsActiveD203 = false
let IsActiveD202 = false
let IsActiveD201 = false
let IsActiveD103 = false
let IsActiveD102 = false
let IsActiveD101 = false

let scoreNum = 0
let maxScore = 0
let currentScore = 0
let cooldown = false

let yellowIsActive = true
let greenIsActive = false
let blueIsActive = false
let redIsActive = false
let blackIsActive = false
let rainbowIsActive = false
let goldIsActive = false

let rainbowIsLocked = true
let goldIsLocked = true

// Buttons and functions
document.onkeydown = function (e) {
    if (isReady) {
        if ((e.key == " " || e.code == "Space" || e.keyCode == 32) && isStarted === false) {

            level = 0
            clearInterval(gC)
            gravity()

            greenPipes()
            checkDeath()
            changeBackground("start")

            spaceAd.style.visibility = ""

            posY -= 10
            let fly_one = setTimeout(function () {
                posY -= 15
            }, 25)
            let fly_two = setTimeout(function () {
                posY -= 20
            }, 50)
            let fly_three = setTimeout(function () {
                posY -= 15
            }, 75)

            isAlive = true
            isStarted = true

        } else if ((e.key == " " || e.code == "Space" || e.keyCode == 32) && isStarted === true) {
            clearInterval(gC)

            level = 0
            gravity()

            posY -= 10
            let fly_one = setTimeout(function () {
                posY -= 15
            }, 25)
            let fly_two = setTimeout(function () {
                posY -= 20
            }, 50)
            let fly_three = setTimeout(function () {
                posY -= 15
            }, 75)
        }
    }
}

playBtn.addEventListener("click", function () {
    menuDiv.style.visibility = "hidden"
    menuDiv.style.display = "none"

    spaceAd.style.visibility = "visible"

    scoreDiv.style.visibility = "visible"

    isReady = true
})

customBtn.addEventListener("click", function () {
    customisationDiv.style.display = ""
    customisationDiv.style.visibility = "visible"

    menuDiv.style.visibility = "hidden"
    menuDiv.style.display = "none"

    colorLock()
})

backBtn.addEventListener("click", function () {
    customisationDiv.display = "none"
    customisationDiv.style.visibility = ""

    menuDiv.style.visibility = ""
    menuDiv.style.display = ""
})

yellowBtn.addEventListener("click", function () {
    yellowIsActive = true
    greenIsActive = false
    blueIsActive = false
    redIsActive = false
    blackIsActive = false
    goldIsActive = false
    rainbowIsActive = false

    demoBird.src = "images/idle-two.png"
    birdModel.src = "images/idle-two.png"
})

greenBtn.addEventListener("click", function () {
    yellowIsActive = false
    greenIsActive = true
    blueIsActive = false
    redIsActive = false
    blackIsActive = false
    goldIsActive = false
    rainbowIsActive = false

    demoBird.src = "images/birdGreenOne.png"
    birdModel.src = "images/birdGreenOne.png"
})

blueBtn.addEventListener("click", function () {
    yellowIsActive = false
    greenIsActive = false
    blueIsActive = true
    redIsActive = false
    blackIsActive = false
    goldIsActive = false
    rainbowIsActive = false

    demoBird.src = "images/birdBlueOne.png"
    birdModel.src = "images/birdBlueOne.png"
})

redBtn.addEventListener("click", function () {
    yellowIsActive = false
    greenIsActive = false
    blueIsActive = false
    redIsActive = true
    blackIsActive = false
    goldIsActive = false
    rainbowIsActive = false

    demoBird.src = "images/birdredOne.png"
    birdModel.src = "images/birdRedOne.png"
})

blackBtn.addEventListener("click", function () {
    yellowIsActive = false
    greenIsActive = false
    blueIsActive = false
    redIsActive = false
    blackIsActive = true
    goldIsActive = false
    rainbowIsActive = false

    demoBird.src = "images/birdBlackOne.png"
    birdModel.src = "images/birdBlackOne.png"
})

rainbowBtn.addEventListener("click", function () {
    if (rainbowIsLocked) {
        lockedDiv.style.visibility = "visible"
        lockedTitle.textContent = "Get a Max score of 100"
    } else {
        yellowIsActive = false
        greenIsActive = false
        blueIsActive = false
        redIsActive = false
        blackIsActive = false
        goldIsActive = false
        rainbowIsActive = true

        demoBird.src = "images/birdRainbow1.png"
        birdModel.src = "images/birdRainbow2.png"
    }
})

goldBtn.addEventListener("click", function () {
    if (goldIsLocked) {
        lockedDiv.style.visibility = "visible"
        lockedTitle.textContent = "Get a Max score of 50"
    } else {
        yellowIsActive = false
        greenIsActive = false
        blueIsActive = false
        redIsActive = false
        blackIsActive = false
        goldIsActive = true
        rainbowIsActive = false

        demoBird.src = "images/birdGold1.png"
        birdModel.src = "images/birdGold2.png"
    }
})

okBtn.addEventListener("click", function () {
    lockedDiv.style.visibility = ""
})

volumeBtn.addEventListener("click", function () {
    if (isMuted) {
        volumeBtn.style.backgroundImage = "url('images/volumeBtn.png')"
        isMuted = false
    } else {
        volumeBtn.style.backgroundImage = "url('images/volumeBtnNo.png')"
        isMuted = true
    }
})

retryBtn.addEventListener("click", function () {
    menuDiv.style.visibility = "hidden"
    menuDiv.style.display = "none"

    spaceAd.style.visibility = "visible"

    scoreDiv.style.visibility = "visible"

    deathDiv.style.visibility = ""

    scoreDisplay.textContent = scoreNum
    isReady = true

    posY = 250
})

goMenuBtn.addEventListener("click", function () {
    menuDiv.style.visibility = ""
    menuDiv.style.display = ""
    deathDiv.style.visibility = ""
    scoreDisplay.textContent = scoreNum
})

// Gravity in three levels, each one being stronger
function gravity() {
    gC = setInterval(function () {
        if (level < 50) {
            posY += 2
            level++
        } else if (level >= 50 && level < 130) {
            posY += 3
            level++
        } else {
            posY += 4
        }

        if (posY > 515) {
            posY = 515
        } else if (posY < 0) {
            posY = 0
        }

        birdToggle()

        playerBody.style.top = posY
    }, 10)
}

// Spawning and moving obstacles
function greenPipes() {

    pC = setInterval(function () {

        // Random Generator
        let randomGen = Math.floor(Math.random() * 3)

        if (randomGen == 0) {
            if (IsActiveU303 && IsActiveD103) {
                u302.style.transitionDuration = ""
                d102.style.transitionDuration = ""

                u302.style.right = "450px"
                d102.style.right = "450px"

                IsActiveD102 = true
                IsActiveU302 = true

                let gp_bottom_two = setTimeout(function () {
                    u302.style.transitionDuration = "0s"
                    d102.style.transitionDuration = "0s"

                    u302.style.right = "-50px"
                    d102.style.right = "-50px"

                    IsActiveD102 = false
                    IsActiveU302 = false
                }, 5000)
            } else if ((IsActiveU303 && IsActiveD103) && (IsActiveU302 && IsActiveD102)) {
                u301.style.transitionDuration = ""
                d101.style.transitionDuration = ""

                u301.style.right = "450px"
                d101.style.right = "450px"

                IsActiveD101 = true
                IsActiveU301 = true

                let gp_bottom_one = setTimeout(function () {
                    u301.style.transitionDuration = "0s"
                    d101.style.transitionDuration = "0s"

                    u301.style.right = "-50px"
                    d101.style.right = "-50px"

                    IsActiveD101 = false
                    IsActiveU301 = false
                }, 5000)
            } else if ((!IsActiveU303 && !IsActiveD103) && (!IsActiveU302 && !IsActiveD102)) {
                u303.style.transitionDuration = ""
                d103.style.transitionDuration = ""

                u303.style.right = "450px"
                d103.style.right = "450px"

                IsActiveD103 = true
                IsActiveU303 = true

                let gp_bottom_three = setTimeout(function () {
                    u303.style.transitionDuration = "0s"
                    d103.style.transitionDuration = "0s"

                    u303.style.right = "-50px"
                    d103.style.right = "-50px"

                    IsActiveD103 = false
                    IsActiveU303 = false
                }, 5000)
            }

        } else if (randomGen == 1) {
            if (IsActiveU203 && IsActiveD203) {
                u202.style.transitionDuration = ""
                d202.style.transitionDuration = ""

                u202.style.right = "450px"
                d202.style.right = "450px"

                IsActiveD202 = true
                IsActiveU202 = true

                let gp_middle_two = setTimeout(function () {
                    u202.style.transitionDuration = "0s"
                    d202.style.transitionDuration = "0s"

                    u202.style.right = "-50px"
                    d202.style.right = "-50px"

                    IsActiveD202 = false
                    IsActiveU202 = false
                }, 5000)
            } else if ((IsActiveU203 && IsActiveD203) && (IsActiveU202 && IsActiveD202)) {
                u201.style.transitionDuration = ""
                d201.style.transitionDuration = ""

                u201.style.right = "450px"
                d201.style.right = "450px"

                IsActiveD201 = true
                IsActiveU201 = true

                let gp_middle_one = setTimeout(function () {
                    u201.style.transitionDuration = "0s"
                    d201.style.transitionDuration = "0s"

                    u201.style.right = "-50px"
                    d201.style.right = "-50px"

                    IsActiveD201 = false
                    IsActiveU201 = false
                }, 5000)
            } else if ((!IsActiveU203 && !IsActiveD203) && (!IsActiveU202 && !IsActiveD202)) {
                u203.style.transitionDuration = ""
                d203.style.transitionDuration = ""

                u203.style.right = "450px"
                d203.style.right = "450px"

                IsActiveD203 = true
                IsActiveU203 = true

                let gp_middle_three = setTimeout(function () {
                    u203.style.transitionDuration = "0s"
                    d203.style.transitionDuration = "0s"

                    u203.style.right = "-50px"
                    d203.style.right = "-50px"

                    IsActiveD203 = false
                    IsActiveU203 = false
                }, 5000)
            }
        } else if (randomGen == 2) {
            if (IsActiveU103 && IsActiveD303) {
                u102.style.transitionDuration = ""
                d302.style.transitionDuration = ""

                u102.style.right = "450px"
                d302.style.right = "450px"

                IsActiveD302 = true
                IsActiveU102 = true

                let gp_top_two = setTimeout(function () {
                    u102.style.transitionDuration = "0s"
                    d302.style.transitionDuration = "0s"

                    u102.style.right = "-50px"
                    d302.style.right = "-50px"

                    IsActiveD302 = false
                    IsActiveU102 = false
                }, 5000)
            } else if ((IsActiveU103 && IsActiveD303) && (IsActiveU102 && IsActiveD302)) {
                u101.style.transitionDuration = ""
                d301.style.transitionDuration = ""

                u101.style.right = "450px"
                d301.style.right = "450px"

                IsActiveD301 = true
                IsActiveU101 = true

                let gp_top_one = setTimeout(function () {
                    u101.style.transitionDuration = "0s"
                    d301.style.transitionDuration = "0s"

                    u101.style.right = "-50px"
                    d301.style.right = "-50px"

                    IsActiveD301 = false
                    IsActiveU101 = false
                }, 5000)
            } else if ((!IsActiveU103 && !IsActiveD303) && (!IsActiveU102 && !IsActiveD302)) {
                u103.style.transitionDuration = ""
                d303.style.transitionDuration = ""

                u103.style.right = "450px"
                d303.style.right = "450px"

                IsActiveD303 = true
                IsActiveU103 = true

                let gp_top_three = setTimeout(function () {
                    u103.style.transitionDuration = "0s"
                    d303.style.transitionDuration = "0s"

                    u103.style.right = "-50px"
                    d303.style.right = "-50px"

                    IsActiveD303 = false
                    IsActiveU103 = false
                }, 5000)
            }
        }
    }, 2000)
}

// Check death
function checkDeath() {

    dC = setInterval(function () {

        if (isAlive) {
            for (let i = 0; i < obstacleClass.length; i++) {

                const obstacleRight = parseInt(window.getComputedStyle(obstacleClass[i]).getPropertyValue("right"))
                const obstacleHeight = parseInt(window.getComputedStyle(obstacleClass[i]).getPropertyValue("height"))
                obstacleTop = parseInt(window.getComputedStyle(obstacleClass[i]).getPropertyValue("top"))

                const playerTop = (parseInt(window.getComputedStyle(playerBody).getPropertyValue("top")))
                const playerBottom = (parseInt(window.getComputedStyle(playerBody).getPropertyValue("bottom")))

                if (obstacleRight < 375 && obstacleRight > 285) {
                    if (obstacleTop == 0) {
                        if (playerTop < obstacleHeight) {
                            onDeath()
                        }
                    } else {
                        if (playerBottom < (obstacleHeight + 40)) {
                            onDeath()
                        }
                    }
                }
                if ((obstacleRight == 376) && !cooldown) {
                    score()
                    cooldown = true

                    let cC = setTimeout(function () {
                        cooldown = false
                    }, 1000)

                    if (!isMuted) {
                        beep()
                    }
                }
            }

            const playerTop = (parseInt(window.getComputedStyle(playerBody).getPropertyValue("top")))

            if (playerTop > 514) {
                onDeath()
            }
        }
    }, 10)
}

function onDeath() {
    deathDiv.style.visibility = "visible"
    scoreDisplay.style.visibility = ""

    isAlive = false
    isReady = false
    isStarted = false

    clearInterval(gC)
    clearInterval(dC)
    clearInterval(pC)

    pipeReorder()

    if (scoreNum > maxScore) {
        maxScore = scoreNum
    }

    currentScore = scoreNum
    scoreNum = 0

    playerBody.style.top = "250px"
    yourScoreDeath.textContent = currentScore

    spaceAd.style.visibility = ""
    scoreDiv.style.visibility = ""

    changeBackground("death")

    posY = 250
}

function changeBackground(typeOf) {
    if (typeOf == "start") {
        gameDiv.style.backgroundImage = "url('images/flappyBird-background.gif')"
    } else if (typeOf == "death") {
        gameDiv.style.backgroundImage = "url('images/flappyBird-background.png')"
    }
}

function score() {
    scoreNum++
    scoreDisplay.textContent = scoreNum
    if (scoreNum < 9) {
        scoreDiv.style.left = "44%"
    } else {
        scoreDiv.style.left = ""
    }
}

function birdToggle() {
    if (srcToggle) {
        if (yellowIsActive) {
            birdModel.src = "images/idle-two.png";

        } else if (greenIsActive) {
            birdModel.src = "images/birdGreenOne.png"

        } else if (blueIsActive) {
            birdModel.src = "images/birdBlueOne.png"

        }
        else if (redIsActive) {
            birdModel.src = "images/birdRedOne.png"

        } else if (blackIsActive) {
            birdModel.src = "images/birdBlackOne.png"

        } else if (goldIsActive) {
            birdModel.src = "images/birdGold1.png"

        } else if (rainbowIsActive) {
            birdModel.src = "images/birdRainbow1.png"

        }

        srcToggle = false
    } else {
        if (yellowIsActive) {
            birdModel.src = "images/idle-one.png";

        } else if (greenIsActive) {
            birdModel.src = "images/birdGreenTwo.png"

        } else if (blueIsActive) {
            birdModel.src = "images/birdBlueTwo.png"

        }
        else if (redIsActive) {
            birdModel.src = "images/birdRedTwo.png"

        } else if (blackIsActive) {
            birdModel.src = "images/birdBlackTwo.png"

        } else if (goldIsActive) {
            birdModel.src = "images/birdGold2.png"

        } else if (rainbowIsActive) {
            birdModel.src = "images/birdRainbow2.png"

        }

        srcToggle = true
    }
}

function beep() {
    let sound = new Audio("sounds/score.mp3")
    sound.play()
}

function pipeReorder() {
    u302.style.transitionDuration = "0s"
    d102.style.transitionDuration = "0s"

    u302.style.right = "-50px"
    d102.style.right = "-50px"

    IsActiveD102 = false
    IsActiveU302 = false

    u301.style.transitionDuration = "0s"
    d101.style.transitionDuration = "0s"

    u301.style.right = "-50px"
    d101.style.right = "-50px"

    IsActiveD101 = false
    IsActiveU301 = false

    u303.style.transitionDuration = "0s"
    d103.style.transitionDuration = "0s"

    u303.style.right = "-50px"
    d103.style.right = "-50px"

    IsActiveD103 = false
    IsActiveU303 = false

    u202.style.transitionDuration = "0s"
    d202.style.transitionDuration = "0s"

    u202.style.right = "-50px"
    d202.style.right = "-50px"

    IsActiveD202 = false
    IsActiveU202 = false

    u201.style.transitionDuration = "0s"
    d201.style.transitionDuration = "0s"

    u201.style.right = "-50px"
    d201.style.right = "-50px"

    IsActiveD201 = false
    IsActiveU201 = false

    u203.style.transitionDuration = "0s"
    d203.style.transitionDuration = "0s"

    u203.style.right = "-50px"
    d203.style.right = "-50px"

    IsActiveD203 = false
    IsActiveU203 = false

    u102.style.transitionDuration = "0s"
    d302.style.transitionDuration = "0s"

    u102.style.right = "-50px"
    d302.style.right = "-50px"

    IsActiveD302 = false
    IsActiveU102 = false

    u101.style.transitionDuration = "0s"
    d301.style.transitionDuration = "0s"

    u101.style.right = "-50px"
    d301.style.right = "-50px"

    IsActiveD301 = false
    IsActiveU101 = false

    u103.style.transitionDuration = "0s"
    d303.style.transitionDuration = "0s"

    u103.style.right = "-50px"
    d303.style.right = "-50px"

    IsActiveD303 = false
    IsActiveU103 = false
}

function colorLock() {
    if (maxScore > 49) {
        goldIsLocked = false
        goldBtn.style.backgroundImage = ""
    } else {
        goldIsLocked = true
        goldBtn.style.backgroundImage = "url('images/lockedColor.png')"
    }
    if (maxScore > 99) {
        rainbowIsLocked = false
        rainbowBtn.style.backgroundImage = ""
    } else {
        rainbowIsLocked = true
        rainbowBtn.style.backgroundImage = "url('images/lockedColor.png')"
    }
}