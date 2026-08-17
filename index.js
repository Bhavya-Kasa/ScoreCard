let score = 0;
let guestScore = 0;
let scoreEl = document.getElementById("score");
let guestScoreEl = document.getElementById("guest-score");
scoreEl.innerText = score;
guestScoreEl.innerText = guestScore;

function sumScore(num) {
    score += num;
    scoreEl.innerText = score;
}

function sumGuestScore(num) {
     guestScore += num;
    guestScoreEl.innerText = guestScore;
}