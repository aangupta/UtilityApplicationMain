const promise = fetch('https://ipapi.co/json/');
promise
    .then((response) => response.json())
    .then((json) => {
        document.querySelector('#ipaddress').value = json.ip;
    });
