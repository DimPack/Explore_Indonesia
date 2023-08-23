import * as flsFunctions from "./modules/CheakOutWebp.js" //імпортуємо всі функції з папки modules та виклиткаємо ці функції
import anime from 'animejs/lib/anime.es.js';
flsFunctions.isWebp(); //flsFunctions - це довільна назва архіву з функціями документу з якого імпортуємо

// За допомогою модульного імпортування ми може з папки npm_modules на пряму імортувати будь що і на пряму з ним працювати
// наприклад слайдер https://swiperjs.com/get-started

const paths = document.querySelectorAll('.logo-path');
anime({
    targets: paths,
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 3000,
    endDelay: 1000,
    easing: 'linear',
    loop: true,
});