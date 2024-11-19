document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.drop-down-menu-btn');
    const closeBtn = document.querySelector('.drop-down-menu-close-btn');
    const teaSortsMenu = document.querySelector('.tea-sorts-drop-down-menu');

    toggleBtn.addEventListener('click', () => {
        teaSortsMenu.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        teaSortsMenu.classList.remove('show');
    })

    window.addEventListener('click', (event) => {
        if (!teaSortsMenu.contains(event.target) && event.target !== toggleBtn) {
            teaSortsMenu.classList.remove('show');
        }
    });
});