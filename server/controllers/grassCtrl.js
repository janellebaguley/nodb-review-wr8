//Controllers contain the handler functions for endpoints. When building a controller,
//you need to use module.exports to export your functions. You should export an object of
//methods (seen below), so that you can create as many handler functions as you need.
const axios = require('axios');

module.exports = {
    getWildPokemon: (req, res) => {
        const pokemonArray =[]
        const random1= Math.ceil(Math.random() * 151),
              random2= Math.ceil(Math.random() * 151),
              random3= Math.ceil(Math.random() * 151)

        axios.get(`https://pokeapi.co/api/v2/pokemon/${random1}`)
            .then(res => {
                pokemonArray.push(res.data)
                axios.get(`https://pokeapi.co/api/v2/pokemon/${random2}`)
                .then(res => {
                    pokemonArray.push(res.data)
                    axios.get(`https://pokeapi.co/api/v2/pokemon/${random3}`)
                    .then(res => {
                    pokemonArray.push(res.data)
                    res.status(200).send(pokemonArray)
            })
        })
    })
    .catch(err => res.status(500).send(err)) 
  }
}