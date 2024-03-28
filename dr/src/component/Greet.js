import React from 'react';

export const Greet = (props) => {
    return (
        <div>
            <h1>Hello, {props.name} superhero {props.heroname}</h1>
            <h1>{props.children}</h1>
        </div>
    );
};

// export default Greet;