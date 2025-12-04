const body = document.body;
const toggleBtn = document.querySelector('.toggle-theme');

function toggleTheme() {
    body.classList.toggle('light')
    toggleBtn.textContent = body.classList.contains('light')
      ?  '🌙 Dark'
      : '✨ light'

    body.style.animation = 'nome'
    body.offsetHeight;
    body.style.animation = 'fadeIn 1.4s ease-in'  

}

toggleBtn.addEventListener('click', toggleTheme)