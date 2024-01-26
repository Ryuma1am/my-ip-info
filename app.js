const main = document.querySelector("main")
fetch('https://ipapi.co/json/')
.then(function(response) {
  response.json().then(jsonData => {
    printData(jsonData);
  });
})
.catch(function(error) {
  console.log(error)
});

function printData(data) {
    main.innerHTML = `
    <table>
        <tr>
            <td>IP Address</td>
            <td>${data.ip}</td>
        </tr>
        <tr>
            <td>City</td>
            <td>${data.region}</td>
        </tr>
        <tr>
            <td>Region</td>
            <td>${data.region}</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>${data.country_code} || ${data.country_name}</td>
        </tr>
        <tr>
            <td>European Union</td>
            <td>${data.latitude}, ${data.longitude}</td>
        </tr>
        <tr>
            <td>Latitude / Longitude</td>
            <td>${data.ip}</td>
        </tr>
        <tr>
            <td>Time Zone</td>
            <td>${data.timezone}</td>
        </tr>
        <tr>
            <td>Org</td>
            <td>${data.org}</td>
        </tr>
    </table>
    `

}

