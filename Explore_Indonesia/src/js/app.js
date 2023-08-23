import * as flsFunctions from "./modules/CheakOutWebp.js" //імпортуємо всі функції з папки modules та виклиткаємо ці функції
import * as log from "./modules/test_console_log.js"
flsFunctions.isWebp(); //flsFunctions - це довільна назва архіву з функціями документу з якого імпортуємо
log.log()
// За допомогою модульного імпортування ми може з папки npm_modules на пряму імортувати будь що і на пряму з ним працювати
// наприклад слайдер https://swiperjs.com/get-started