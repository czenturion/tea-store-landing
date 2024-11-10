document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.drop-down-menu-btn');
    const closeBtn = document.querySelector('.drop-down-menu-close-btn');
    const teaSortsMenu = document.querySelector('.tea-sorts-drop-down-menu');

    toggleBtn.addEventListener('click', () => {
        console.log('+++++')
        teaSortsMenu.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        console.log('-----')
        teaSortsMenu.classList.remove('show');
    })

    window.addEventListener('click', (event) => {
        if (!teaSortsMenu.contains(event.target) && event.target !== toggleBtn) {
            teaSortsMenu.classList.remove('show');
        }
    });
});