const portfolioApp = {};

portfolioApp.scrollFromHeader = function() {
    const downArrow = document.querySelector(`.fa-chevron-down`);
    downArrow.addEventListener(`mouseover`, function (event) {
        const aboutSection = document.querySelector(`.about`);
        aboutSection.scrollIntoView({behavior: `smooth`, block: `center`});
    })
}

portfolioApp.init = () => {
    portfolioApp.scrollFromHeader();

}

portfolioApp.init();

