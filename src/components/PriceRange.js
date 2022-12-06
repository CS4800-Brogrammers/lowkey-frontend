import React, {useState} from 'react';

const PriceRange = (props) =>{
    const {setPrice, filterConfig, setFilterConfig} = props;
    const handleOnChange = (event) => {
        setFilterConfig({...filterConfig, [event.target.id]:event.target.value })
        // (event) => {setPrice(event.target.value)}
        
    };
    return(
        <div>
            <label> $0</label>
            <input type="range" id="price" 
                    min="0" max="100" value= {filterConfig["price"]} onChange= {handleOnChange}/>
            <label for="volume"> ${filterConfig["price"]}</label>
        </div>

    )
};

export default PriceRange;