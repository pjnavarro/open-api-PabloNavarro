const clubes = require ('./clubes');
const country = require ('./country');
const provinces = require ('./provinces');
const cars = require ('./cars');

module.exports = {...clubes, ...country, ...cars, ...provinces};
