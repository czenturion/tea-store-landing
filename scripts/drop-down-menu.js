document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.drop-down-menu-btn');
    const teaSortsMenu = document.querySelector('.tea-sorts');

    toggleButton.addEventListener('click', () => {
        console.log('+++++')
        teaSortsMenu.classList.add('show');
    });

    window.addEventListener('click', (event) => {
        if (!teaSortsMenu.contains(event.target) && event.target !== toggleButton) {
            teaSortsMenu.classList.remove('show');
        }
    });
});