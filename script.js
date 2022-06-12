const portfolioApp = {};

portfolioApp.scrollFromHeader = function() {
    const downArrow = document.querySelector(`.fa-chevron-down`);
    console.log(downArrow);
    downArrow.addEventListener(`mouseover`, function (event) {
        const aboutSection = document.querySelector(`.about`);
        aboutSection.scrollIntoView({behavior: `smooth`, block: `center`});
    })
}

//would like to change the picture on hover, but the replacement img is a different size, so need to fix that first

// portfolioApp.changeAboutPic = function() {
//     const aboutPicElement = document.querySelector('.aboutPicture');
//     aboutPicElement.addEventListener('mouseenter', function (event) {
//         event.target.src="./styles/assets/fashun.jpg";
//     })
//     aboutPicElement.addEventListener('mouseout', function (event) {
//         event.target.src = "./styles/assets/melaniePortraitCopy.jpg";
//     })
// }

portfolioApp.init = () => {
    portfolioApp.scrollFromHeader();
    // portfolioApp.changeAboutPic();
}

portfolioApp.init();

