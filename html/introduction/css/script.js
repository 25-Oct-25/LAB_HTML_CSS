// Flip Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Anime Selection
document.getElementById('submitAnime').addEventListener('click', () => {
    const selected = Array.from(document.querySelectorAll('input[name="anime"]:checked'))
                          .map(el => el.value);
    const resultEl = document.getElementById('result');
    if(selected.length === 0){
        resultEl.textContent = "You haven't selected any anime yet!";
    } else {
        resultEl.textContent = "Your favorite anime: " + selected.join(", ");
    }
});
