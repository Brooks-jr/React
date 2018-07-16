import React from 'react';

const Action = (props) => (
    <div>
        <button className="cta" onClick={props.handlePickOption} disabled={!props.hasOptions}>what should i do?</button>
    </div>
);

export default Action;