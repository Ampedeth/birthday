// Function to handle card transitions
function nextCard(step) {
  // Select all the cards
  const frontCard = document.querySelector('.envelope.front');
  const backCard = document.querySelector('.envelope.back');
  const birthdayCard = document.querySelector('.birthday-card');
  
  // Based on the step, hide the current card and show the next one
  if (step === 1) {
    // Show the back of the envelope, hide the front
    frontCard.style.display = 'none';
    backCard.style.display = 'block';
  } else if (step === 2) {
    // Show the birthday card, hide the back of the envelope
    backCard.style.display = 'none';
    birthdayCard.style.display = 'block';
  }
}
