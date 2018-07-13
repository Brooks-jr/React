import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePickOption} disabled={!props.hasOptions}>what should i do?</button>
        </div>
    );
};

export default Action;