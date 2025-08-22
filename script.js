let homeScore = 0;
let guestScore = 0;

function changeScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-score').textContent = homeScore;
    } else {
        guestScore += points;
        document.getElementById('guest-score').textContent = guestScore;
    }
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('home-score').textContent = '0';
    document.getElementById('guest-score').textContent = '0';
}
