import React from 'react';
import Option from './option';



const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3>your options</h3>
            <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>

        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }

        {props.options.length === 0 && <p className="widget-message">Add an option to get started!</p>}

    </div>
);

export default Options;