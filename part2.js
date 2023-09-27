let url = "https://deckofcardsapi.com/api/deck/";
// parameters = <<deck_id>>/draw/?count=1

async function getCard() {
  let res = await axios.get(`${url}new/draw/?count=1`);
  let suit = res.data.cards[0].suit;
  let value = res.data.cards[0].value;
  console.log(`${value} of ${suit}`);
}

async function getCards() {
  try {
    let cards = [];
    let res = await axios.get(`${url}new/draw/?count=1`);
    let res2 = await axios.get(`${url}${res.data.deck_id}/draw/?count=1`);
    let suit = res.data.cards[0].suit;
    let value = res.data.cards[0].value;
    let suit2 = res2.data.cards[0].suit;
    let value2 = res2.data.cards[0].value;
    cards.push(`${value} of ${suit}`, `${value2} of ${suit2}`);
    console.log(cards);
  } catch {
    console.log("something went wrong");
  }
}

let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", async function () {
  let first = await axios.get(`${url}new/draw/?count=1`);
  let second = await axios.get(`${url}${first.data.deck_id}/draw/?count=1`);
  let carta = second.data.cards[0].image;
  return (div.innerHTML = `<img src="${carta}" alt="carta">`);
});
