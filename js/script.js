// const

const imgArray = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"]
const imgElem = document.querySelector(".items")

// inserimento immagini

let innerString = "";

for (let i = 0; i < imgArray.length; i++) {
    const curImg = imgArray[i];  
    console.log(curImg)  
    innerString += `<div class="item"><img src="${curImg}" alt=""></div>`
}

imgElem.innerHTML += innerString

const itemElem = document.querySelectorAll(".item")

console.log(itemElem)

// prima immagine visualizzata

let imgActive = 0

itemElem[imgActive].classList.add("active")



