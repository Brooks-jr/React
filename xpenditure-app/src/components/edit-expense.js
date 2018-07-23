import React from 'react';

const EditPage = (props) => {
    console.log(props);
    return (
        <div>
            Edit component page for expense with id of {props.match.params.id}
        </div>
    );
};

export default EditPage;