import React from 'react';
import axios from 'axios';

export default class DB extends React.Component {

    constructor(props) {
        super(props)
        this.state = { db: '' }
    }

    componentDidMount() {
        axios.get('/api/db').then(results => { this.setState({ db: results.data }) })
    }

    render() {
        return (
            <div className="DB">
                <div className="dbResults">
                    {this.state.db ? this.state.db.map((animal, i) => (
                        <div key={i}>{animal.type}</div>
                    )) : 'Loading...'}
                </div>
            </div>
        )
    }
}