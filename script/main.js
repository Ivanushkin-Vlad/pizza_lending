let btn = document.querySelector('.logo_language_menu');
let popupBg = document.querySelector('.popup_lang');

btn.addEventListener('click',()=>{
    popupBg.classList.toggle('active');    
})


popupBg.addEventListener('click', (e)=>{
    if(e.target === popupBg){
    popupBg.classList.remove('active');
    }
})

popupBg.addEventListener('click',(e)=>{
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