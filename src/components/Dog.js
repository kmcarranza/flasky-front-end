import React from "react";

const Dog = () => {
    const rubs = () =>{
        console.log('Ruff Ruff');
    }    
    return(
        <li>
            <h3>Name of Dog</h3>
            <button>Rub Belly</button>
            rubs();
        </li>
    );
}

export default Dog;
