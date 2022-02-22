// tady je místo pro náš program


function roll() {
    let number = Math.floor(Math.random() * 6 + 1);
    let zprava = document.getElementById('zprava')
    let kostka =  document.getElementById('kostka')

    // console.log (number)
    if (number === 6) {
        zprava.textContent = "6!!! Výhra!"
    } else {
        zprava.textContent = number + "... Nemáš šťastie, skús znova. :("
    }

    if (number > 0 && number < 7) {
        kostka.src = kostka.src = "obrazky/" + number + ".png"
    } else {
        console.log("Error/Invalid number")
    }
}




    // } else if (number == 5) {
    //     zprava.textContent = "5... Nemáš šťastie, skús znova. :("
    //     kostka.src = "obrazky/5.png"

    // } else if (number == 4) {
    //     zprava.textContent = "4... Nemáš šťastie, skús znova. :("
    //     kostka.src = "obrazky/4.png"

    // } else if (number == 3) {
    //     zprava.textContent = "3... Nemáš šťastie, skús znova. :("
    //     kostka.src = "obrazky/3.png"

    // } else if (number == 2) {
    //     zprava.textContent = "2... Nemáš šťastie, skús znova. :("
    //     kostka.src = "obrazky/2.png"

    // } else {
    //     zprava.textContent = "1... Nemáš šťastie, skús znova."
    //     kostka.src = "obrazky/1.png"
    // }
    







// Math.floor(Math.random() * 6 + 1);