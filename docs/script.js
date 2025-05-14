// script.js

const faqContainer = document.getElementById('faq-container');
const resetButton = document.getElementById('reset-button');

// Event delegation: single listener on parent container
faqContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('question')) {
    const allAnswers = faqContainer.querySelectorAll('.answer');

    if (event.shiftKey) {
      // Toggle all answers
      const anyVisible = Array.from(allAnswers).some(ans => ans.style.display === 'block');
      allAnswers.forEach(ans => {
        ans.style.display = anyVisible ? 'none' : 'block';
      });
    } else {
      // Toggle clicked answer only
      const answer = event.target.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }
  }
});

// Reset button collapses all answers
resetButton.addEventListener('click', () => {
  const allAnswers = faqContainer.querySelectorAll('.answer');
  allAnswers.forEach(ans => {
    ans.style.display = 'none';
  });
});
