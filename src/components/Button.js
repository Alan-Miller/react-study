import React from 'react';

export default function Button(props) {

    return (
        <div onClick={props.onClick} className={props.className || "Button"}>
            {props.children}
        </div>
    )
}