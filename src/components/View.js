import React from 'react';

const View = (potato) => {
    return (
        <div>
            <h3>{potato.passedName}</h3>
            <h3>{potato.age}</h3>
            <h3>{potato.hobbies}</h3>
        </div>
    )
}

export default View; 