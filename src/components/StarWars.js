import React from 'react';
import axios from 'axios';

export default class StarWars extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get('/api/starwars').then(people => { 
            console.log('people', people);
            this.setState({ people: people.data });
        });
    }

    render() {
        return (
            <div className="StarWars">
                <div className="people">
                    {this.state.people.length ? this.state.people.map((person, i) => (
                        <div key={i}>{person.name}</div>
                    )) : 'Loading ... '}
                </div>
            </div>
        )
    }
}