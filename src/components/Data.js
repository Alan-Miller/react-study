import React from 'react';

export default function Data(props) {

    return (
        <div className="Data">
            <div className="dataBox">
                <div>Data says "{props.msg}"</div>
                <br />
                ENV Data
                <br />
                {`NODE_ENV: ${process.env.NODE_ENV}`}
                <br />
                {`REACT_APP_ENV_FILE: ${process.env.REACT_APP_ENV_FILE}`}
            </div>
        </div>
    )
}