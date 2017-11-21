import React from 'react';
import axios from 'axios';

export default class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = { test: '' }
    }

    componentDidMount() {
        axios.get('/api/test').then(results => { this.setState({ test: results.data }) })
    }

    render() {
        return (
            <div className="Test">
                <div className="testResults">
                    {this.state.test ? this.state.test : 'Loading...'}
                </div>
            </div>
        )
    }
}