const axios = require("axios");

let characters = [];

axios.get(`https://swapi.co/api/people`).then(res => {
  characters = res.data.results;
});

module.exports = {
  getChar: (req, res, next) => {
    res.status(200).json(characters);
  },
  addChar: (req, res, next) => {
    let { char } = req.body;
    characters.push(char);
    res.status(200).json(characters);
  }
};
