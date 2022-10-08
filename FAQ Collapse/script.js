const faq = document.querySelectorAll('.faq');
const toggleBtn = document.querySelectorAll('.faq-toggle');

toggleBtn.forEach((e, i) => {
    e.addEventListener('click', () => {
        faq[i].classList.toggle('active');
    })
})