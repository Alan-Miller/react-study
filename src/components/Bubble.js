import React from 'react';
import Button from './Button';

export default function Bubble(props) {

    return (
        <div className="Bubble">
            <div className="outerBox">
                <div className="innerBox">
                    <Button>Click</Button>
                </div>
            </div>
        </div>
    )
}