import React, { useState } from 'react';

function Slider() {

    const [range, setRange] = useState(1);



    const rangeHandler = function (event) {
        console.log("before",range,event.target.value);
        setRange({ range: event.target.value});
        console.log("after",range,event.target.value);
    }

    return (

        <div>
            <input type="range" min="1" max="500" step="1" value={range} onChange={rangeHandler}></input>
        </div>

    )
}

export default Slider;

