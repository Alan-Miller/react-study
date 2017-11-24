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
                        <div>
                            <span className="x" onClick={() => this.setState({ showModal: false })}>x</span>
                            <span className="info">Dark gray box has onClick event to close modal. Button and modal are both inside gray box, so clicking them would propagate a click event back to gray box, closing modal. Instead, button and modal invoke stopPropagation method to prevent propagation to the outer box (i.e., clicking them does not close modal). Clicking outside modal (or on 'x') will close modal.</span>
                        </div>
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