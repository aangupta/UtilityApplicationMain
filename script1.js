const result = document.querySelector('#output-text');
const input = document.querySelector('#input-text');
const convert = document.querySelector('#convert');
const inpType = document.querySelector('#inputType');
const resType = document.querySelector('#resultType');

function translate() {
    const url = new URL('https://api.mymemory.translated.net/');
    const param = { q: input.value, langpair: 'en|it', of: JSON };
    Object.keys(param).forEach((key) => {
        url.searchParams.append(key, param[key]);
    });
    url.search = new URLSearchParams(param).toString();
    const promise = fetch(url, { mode: 'no-cors' });
    promise
        .then((response) => response.json)
        .then((json) => {
            result.value = json.responseData.translatedText;
        });
}

convert.addEventListener('click', translate);
