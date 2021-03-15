const result = document.querySelector('#output-text');
const input = document.querySelector('#input-text');
const translate = document.querySelector('#translate');
const inpType = document.querySelector('#inputType');
const resType = document.querySelector('#resultType');

window.addEventListener('load', () => {
    translate.addEventListener('click', () => {
        fetch(`https://api.mymemory.translated.net/get?q=${input.value}&langpair=${inpType.value}|${resType.value}`)
            .then((res) => res.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    });
});
