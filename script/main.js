// let pizzaSale = [
//     {
//         "id": "001",
//         "name": "Челінтано (570гр.)",
//         "price": "139 грн.",
//         "imgSrc": "./image/Chelentano_pizza.png"
//     },
//     {
//         "id": "002",
//         "name": "Маргарита (520гр.)",
//         "price": "179 грн.",
//         "imgSrc": "./image/margarita-pizza.png"
//     },
//     {
//         "id": "003",
//         "name": "Обалдіні (550гр.)",
//         "price": "219 грн.",
//         "imgSrc": "./image/obaldini-pizza.png"
//     }
// ];


let btn = document.querySelector('.logo_language_menu');
let popupBg = document.querySelector('.popup_lang');

let leftBtn = document.querySelector(".buttoms_left");
let rightBtn = document.querySelector(".buttoms_right");

let pizzaName = document.querySelector('.pizza_name');
let pizzaPrice = document.querySelector('.pizza_price');

let pizzaPhoto = document.querySelector('.pizza_logo');

// rightBtn.addEventListener('click', () => {
//        handlerPizza()
// })

// function handlerPizza(){ 
//     for(i = 0; i < pizzaSale.length; i++){
//         pizzaPhoto.src = pizzaSale[i].imgSrc;
//         pizzaName.innerHTML = pizzaSale[i].name;
//         break;
//     }

// }

btn.addEventListener('click', () => {
    popupBg.classList.toggle('active');
})


popupBg.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
    }
})

popupBg.addEventListener('click', (e) => {
    let option = e.target.innerHTML;
    changeURLLanguage(option);

})
const allLang = ["en", 'ua'];
function changeURLLanguage(select) {
    let lang = select;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        location.reload();
    }
    select = hash;

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();
AOS.init();