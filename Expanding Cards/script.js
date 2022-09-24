const expandPanel = document.querySelectorAll('.panel');

expandPanel.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    });
});

function removeActiveClasses() {
    expandPanel.forEach(e => {
        e.classList.remove('active')
    });
}
