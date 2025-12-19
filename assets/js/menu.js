export function initMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menuContainer = document.querySelector('.menu-container');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (mobileMenuBtn && menuContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            menuContainer.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuContainer.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        document.addEventListener('click', (e) => {
            if (!menuContainer.contains(e.target) && !mobileMenuBtn.contains(e.target) && menuContainer.classList.contains('active')) {
                menuContainer.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                if (menuContainer.classList.contains('active')) {
                    menuContainer.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    }
}
