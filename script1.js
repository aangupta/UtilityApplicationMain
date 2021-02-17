const result = document.querySelector('#output-text');
const input = document.querySelector('#input-text');
const convert = document.querySelector('#convert');
const inpType = document.querySelector('#inputType');
const resType = document.querySelector('#resultType');

function translate() {
    /* English */
    if (inpType.value === 'English' && resType.value === 'Itlay') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'en|it' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'English' && resType.value === 'Hindi') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'en|hi' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'English' && resType.value === 'English') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'en|en' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'English' && resType.value === 'Spanish') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'en|es-CO' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'English' && resType.value === 'French') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'en|fr-CI' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'English' && resType.value === 'Arabic') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'en|ar-AE' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Hindi' && resType.value === 'English') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'hi|en' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Hindi' && resType.value === 'Spanish') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'hi|es-CO' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Hindi' && resType.value === 'Itlay') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'hi|it' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Hindi' && resType.value === 'Arabic') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'hi|ar-AE' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Hindi' && resType.value === 'French') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'hi|fr-CI' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Itlay' && resType.value === 'English') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'it|en' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Itlay' && resType.value === 'Spanish') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'it|es-CO' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Itlay' && resType.value === 'Arabic') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'it|ar-AE' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Itlay' && resType.value === 'French') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'it|fr-CI' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Itlay' && resType.value === 'Hindi') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'it|hi' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Spanish' && resType.value === 'English') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'es-CO|en' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Spanish' && resType.value === 'Hindi') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'es-CO|hi' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Spanish' && resType.value === 'Arabic') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'es-CO|ar-AE' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Spanish' && resType.value === 'French') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'es-CO|fr-CI' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Spanish' && resType.value === 'Itlay') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'es-CO|it' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'French' && resType.value === 'English') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'fr-CI|en' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'French' && resType.value === 'Hindi') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'fr-CI|hi' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'French' && resType.value === 'Arabic') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'fr-CI|ar-AE' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'French' && resType.value === 'Spanish') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'fr-CI|es-CO' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'French' && resType.value === 'Itlay') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'fr-CI|it' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Arabic' && resType.value === 'English') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'ar-AE|en' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Arabic' && resType.value === 'Hindi') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'ar-AE|hi' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Arabic' && resType.value === 'Spanish') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'ar-AE|es-CO' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    } else if (inpType.value === 'Arabic' && resType.value === 'Itlay') {
        const url = new URL('https://api.mymemory.translated.net/get');
        const param = { q: input.value, langpair: 'ar-AE|it' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                result.value = json.responseData.translatedText;
            });
    }
}

convert.addEventListener('click', translate);
inpType.addEventListener('change', translate);
resType.addEventListener('change', translate);
