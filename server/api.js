const axios = require('axios');

module.exports = (app) => {
    app.get('/api/db', (req, res) => {
        // req.app.get('db').get_animals().then(response => {
        app.get('db').get_animals().then(response => {
            res.status(200).send(response);
        });
    });

    app.get('/api/test', (req, res) => {
        res.status(200).send('You passed!');
    });

    app.get('/api/starwars', (req, res) => {
        axios.get('https://swapi.co/api/people').then(people => {
            res.status(200).send(people.data.results);
        });
    });

    app.get('/api/pokemon', (req, res) => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(pokemon => {
            console.log(pokemon.data.results)
            res.status(200).send(pokemon.data.results);
        });
    });
}