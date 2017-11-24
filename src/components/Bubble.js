import React from 'react';
import Button from './Button';

export default class Bubble extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    fade() {

    }

    render() {
        return (
            <div className="Bubble">
                <div className="outerBox"
                    onClick={e => { console.log('OUTER'); this.setState({ showModal: false }); }}>
                    <div
                        className={this.state.showModal ? "modal showModal" : "modal"}
                        onClick={e => { e.stopPropagation(); console.log('MODAL'); }}
                    >{
                        this.state.showModal ?
                        <span className="x" onClick={() => this.setState({ showModal: false })}>x</span>
                        : null
                    }</div>
                    <Button
                        onClick={
                            e => {
                                console.log('BUTTON');
                                e.stopPropagation();
                                this.setState({ showModal: true });
                            }}
                    >Open Modal</Button>
                </div>
            </div>
        )
    }
}