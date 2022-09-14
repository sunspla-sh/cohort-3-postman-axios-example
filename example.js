const axios = require('axios');

// axios.get('https://api.punkapi.com/v2/beers/random')
//   .then(response => {
//     let singleBeer = response.data[0];
//     console.log('The name of the beer is ' + singleBeer.name + ' and the tagline is ' + singleBeer.tagline);
//   })
//   .catch(err => console.log(error));

// axios.get('https://restcountries.com/v3.1/name/spain')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err))

const myCountryService = axios.create({
  baseURL: 'https://restcountries.com/v3.1/name/'
});

myCountryService.get('peru')
  .then(res => console.log(res.data))
  .catch(err => console.log(err));