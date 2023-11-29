window.onscroll = function showHeader() {
    let header = document.querySelector('.header__top-row');

    if(window.scrollY > 200) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}