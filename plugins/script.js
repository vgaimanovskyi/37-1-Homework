// spade = &#9824;
// heart = &#9829;
// club = &#9827;
// diamond = &#9830;
const cardsArr = [{
    name: "spade",
    suit: "&#9824;",
    value: "6"
}, {
    name: "spade",
    suit: "&#9824;",
    value: "7"
}, {
    name: "spade",
    suit: "&#9824;",
    value: "8"
}, {
    name: "spade",
    suit: "&#9824;",
    value: "9"
}, {
    name: "spade",
    suit: "&#9824;",
    value: "10"
}, {
    name: "spade",
    suit: "&#9824;",
    value: "J"
}, {
    name: "spade",
    suit: "&#9824;",
    value: "Q"
}, {
    name: "spade",
    suit: "&#9824;",
    value: "K"
}, {
    name: "spade",
    suit: "&#9824;",
    value: "T"
}, {
    name: "heart",
    suit: "&#9829;",
    value: "6"
}, {
    name: "heart",
    suit: "&#9829;",
    value: "7"
}, {
    name: "heart",
    suit: "&#9829;",
    value: "8"
}, {
    name: "heart",
    suit: "&#9829;",
    value: "9"
}, {
    name: "heart",
    suit: "&#9829;",
    value: "10"
}, {
    name: "heart",
    suit: "&#9829;",
    value: "J"
}, {
    name: "heart",
    suit: "&#9829;",
    value: "Q"
}, {
    name: "heart",
    suit: "&#9829;",
    value: "K"
}, {
    name: "heart",
    suit: "&#9829;",
    value: "T"
}, {
    name: "club",
    suit: "&#9827;",
    value: "6"
}, {
    name: "club",
    suit: "&#9827;",
    value: "7"
}, {
    name: "club",
    suit: "&#9827;",
    value: "8"
}, {
    name: "club",
    suit: "&#9827;",
    value: "9"
}, {
    name: "club",
    suit: "&#9827;",
    value: "10"
}, {
    name: "club",
    suit: "&#9827;",
    value: "J"
}, {
    name: "club",
    suit: "&#9827;",
    value: "Q"
}, {
    name: "club",
    suit: "&#9827;",
    value: "K"
}, {
    name: "club",
    suit: "&#9827;",
    value: "T"
}, {
    name: "diamond",
    suit: "&#9830;",
    value: "6"
}, {
    name: "diamond",
    suit: "&#9830;",
    value: "7"
}, {
    name: "diamond",
    suit: "&#9830;",
    value: "8"
}, {
    name: "diamond",
    suit: "&#9830;",
    value: "9"
}, {
    name: "diamond",
    suit: "&#9830;",
    value: "10"
}, {
    name: "diamond",
    suit: "&#9830;",
    value: "J"
}, {
    name: "diamond",
    suit: "&#9830;",
    value: "Q"
}, {
    name: "diamond",
    suit: "&#9830;",
    value: "K"
}, {
    name: "diamond",
    suit: "&#9830;",
    value: "T"
}]

class card {
    constructor(data) {
        this.name = data.name;
        this.suit = data.suit;
        this.value = data.value;
    }
    getHtml() {
        let result = `<div class="col-2 start">`;
        if (this.name === "heart" || this.name === "diamond") {
            result += `<div class="card card--light">`;
        } else {
            result += `<div class="card card--dark">`;
        }
        result += `<div class="card__front"></div>`;
        result += `<div class="card__back">`;
        result += `<div class="number number--tl">${this.value}<div>${this.suit}</div></div>`;
        result += `<div class="number number--bl">${this.value}<div>${this.suit}</div></div>`;
        result += `<div class="picture">`;
        switch (this.value) {
            case "6":
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                break;
            case "7":
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit suit--rotate-between">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                break;
            case "8":
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit suit--between">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit suit--rotate-between">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                break;
            case "9":
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit suit--center">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                break;
            case "10":
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit suit--between-center">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                result += `<div class="suit suit--rotate-between-center">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                result += `<div class="suit suit--rotate">${this.suit}</div>`;
                break;
            case "J":
                switch (this.name) {
                    case "spade":
                        result += `<div class="img img--js"></div>`;
                        break;
                    case "heart":
                        result += `<div class="img img--jh"></div>`;
                        break;
                    case "club":
                        result += `<div class="img img--jc"></div>`;
                        break;
                    case "diamond":
                        result += `<div class="img img--jd"></div>`;
                        break;
                }
                break;
            case "Q":
                switch (this.name) {
                    case "spade":
                        result += `<div class="img img--qs"></div>`;
                        break;
                    case "heart":
                        result += `<div class="img img--qh"></div>`;
                        break;
                    case "club":
                        result += `<div class="img img--qc"></div>`;
                        break;
                    case "diamond":
                        result += `<div class="img img--qd"></div>`;
                        break;
                }
                break;
            case "K":
                switch (this.name) {
                    case "spade":
                        result += `<div class="img img--ks"></div>`;
                        break;
                    case "heart":
                        result += `<div class="img img--kh"></div>`;
                        break;
                    case "club":
                        result += `<div class="img img--kc"></div>`;
                        break;
                    case "diamond":
                        result += `<div class="img img--kd"></div>`;
                        break;
                }
                break;
            case "T":
                result += `<div class="tuz">${this.suit}</div>`;
                break;
            default:
                result += `<div></div>`;
        }
        result += `</div>`; // picture
        result += `<div class="number number--tr">${this.value}<div>${this.suit}</div></div>`;
        result += `<div class="number number--br">${this.value}<div>${this.suit}</div></div>`;
        result += `</div>`; // card__back
        result += `</div>`; // card
        result += `</div>`; // col-2

        document.getElementById("table-row").innerHTML += result;
    }
}

class deckOfCards {
    constructor(_data) {
        this.data = _data;
    }
    print() {
        for (let item of this.data) {
            let cardItem = new card(item);
            cardItem.getHtml();
        }
    }
}

function shuffleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleSort(cardsArr);
const cardsOnTable = new deckOfCards(cardsArr);
cardsOnTable.print();

const cols = document.getElementsByClassName("col-2");
let col = 0;
let heigth = 0;
function play() {
    cols[col].classList.add("move");
    cols[col].classList.remove("start");
    col++;
    window.scrollTo({
        top: heigth,
        behavior: "smooth"
    });
    heigth += 30;
    if (col < cols.length) {
        setTimeout(play, 100)
    }
    if (document.getElementsByClassName("start").length === 0) {
        document.getElementsByClassName("start-card")[0].style.display = "none";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        document.getElementById("caption").style.display = "block";
        document.getElementById("caption").classList.add("animate__animated", "animate__swing");
        document.getElementsByClassName("table")[0].classList.remove("table-block");
    }
}