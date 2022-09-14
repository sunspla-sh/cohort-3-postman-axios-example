const express = require('express');
const hbs = require('hbs');
const CountryService = require('./services/country.service');

const myCountryService = new CountryService();

const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', hbs);



app.get('/', (req, res, next) => {
  res.render('index.hbs');
});

app.get('/country-data', (req, res, next) => {

  const anyCountry = req.query.country;

  
  myCountryService.getCountry(anyCountry)
    .then(axiosResponse => {
      const someCountryData = axiosResponse.data[0];
      const someCountryName = someCountryData.name.common;
      const someCountryRegion = someCountryData.region;
      const someCountryFlag = someCountryData.flags.png;

      res.render('countryData.hbs', {
        countryName: someCountryName,
        countryRegion: someCountryRegion,
        countryFlag: someCountryFlag
      })

    })
    .catch(err => console.log(err));
});

app.get('/all-country-data', (req, res, next) => {
  myCountryService.getAllCountries()
    .then(axiosResponse => {
      res.send(axiosResponse.data);
    })
})

app.listen(3000, () => console.log('yo the server is running'));
