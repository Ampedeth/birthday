function nextCard(step) {
    // Hide current card
    document.querySelectorAll('.envelope, .birthday-card').forEach(card => {
      card.classList.add('hidden');
    });

    // Show the next card
    if (step === 1) {
      document.querySelector('.envelope.back').classList.remove('hidden');
    } else if (step === 2) {
      document.querySelector('.birthday-card').classList.remove('hidden');
    }
  }



  

  

  
  
