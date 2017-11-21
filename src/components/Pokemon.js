import React from 'react';
import axios from 'axios';

export default class Pokemon extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        axios.get('http://pokeapi.co/api/v2/pokemon').then(pokemon => { 
            this.setState({ pokemon: pokemon.data.results });
        });
    }

    render() {
        return (
            <div className="Pokemon">
                <div className="pokemon">
                    {this.state.pokemon.length ? this.state.pokemon.map((poke, i) => (
                        <div key={i}>{poke.name}</div>
                    )) : 'Loading ... '}
                </div>
            </div>
        )
    }
}