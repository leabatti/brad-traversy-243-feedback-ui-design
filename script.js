const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Extremely Satisfied';

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');

    const ratingContainer = e.target.closest('.rating');
    const smallEl = ratingContainer.querySelector('small');
    selectedRating = smallEl.innerText;
  }
});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <p class="heart">❤️</p>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve<br />
    our customer support.</p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
