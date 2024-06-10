const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");
refreshBtn = document.querySelector(".details button"),
popup = document.querySelector(".popup"),
closePopupBtn = document.querySelector(".close-popup");

let maxTime = 50;
let timeLeft = maxTime;
@@ -43,7 +45,9 @@ function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 6 && timeLeft > 0) {
            return clearInterval(timer);
            clearInterval(timer);
            showPopup();
            return;
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
@@ -86,9 +90,19 @@ function shuffleCard() {
    });
}

function showPopup() {
    popup.style.display = "flex";
}

function hidePopup() {
    popup.style.display = "none";
    shuffleCard();
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);
closePopupBtn.addEventListener("click", hidePopup);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
