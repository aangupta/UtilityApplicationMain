const promise = fetch('https://ipapi.co/json/');
promise
    .then((response) => response.json())
    .then((json) => {
        document.querySelector('#ipaddress').value = json.ip;
        document.querySelector('#city').value = json.city;
        document.querySelector('#region').value = json.region;
        document.querySelector('#timezone').value = json.timezone;
        document.querySelector('#country').value = json.country_name;
        document.querySelector('#postalcode').value = json.postal;
        document.querySelector('#currency').value = json.currency;
    });
