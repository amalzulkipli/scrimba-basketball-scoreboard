// Get both displays
const homeDisplay = document.querySelectorAll('.display')[0];
const guestDisplay = document.querySelectorAll('.display')[1];

// Get all buttons for HOME and GUEST
const homeButtons = document.querySelectorAll('.team:nth-child(1) .buttons button');
const guestButtons = document.querySelectorAll('.team:nth-child(2) .buttons button');

// Keep track of scores
let homeScore = 0;
let guestScore = 0;

// Function to update display
function updateDisplay() {
  homeDisplay.textContent = homeScore;
  guestDisplay.textContent = guestScore;
}

// Add event listeners to HOME buttons
homeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const points = parseInt(button.textContent.replace('+',''));
    homeScore += points;
    updateDisplay();
  });
});

// Add event listeners to GUEST buttons
guestButtons.forEach(button => {
  button.addEventListener('click', () => {
    const points = parseInt(button.textContent.replace('+',''));
    guestScore += points;
    updateDisplay();
  });
});

function resetScores() {
            homeScore = 0;
            guestScore = 0;
            updateDisplay()
        }
