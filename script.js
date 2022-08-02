const portfolioApp = {};

portfolioApp.scrollFromHeader = function () {
    const downArrow = document.querySelector(`.fa-chevron-down`);
    downArrow.addEventListener(`mouseover`, function (event) {
        const aboutSection = document.querySelector(`.about`);
        aboutSection.scrollIntoView({ behavior: `smooth`, block: `center` });
    })
}

portfolioApp.switchAboutPic = function () {
    const imageDiv = document.querySelector('.aboutImg');
    imageDiv.addEventListener('mouseover', function () {
        document.querySelector('.aboutImg img').src = './styles/assets/fashun-resize-lg.jpg';
    });
    imageDiv.addEventListener('mouseout', function () {
        document.querySelector('.aboutImg img').src = './styles/assets/melaniePortraitCopy.jpg';
    })
}

portfolioApp.init = () => {
    portfolioApp.scrollFromHeader();
    portfolioApp.switchAboutPic();
}

portfolioApp.init();

