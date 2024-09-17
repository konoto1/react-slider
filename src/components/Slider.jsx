import { Circle } from "./Circle.jsx";
import { useState } from "react";

export function Slider () {

    const [inputValue, setInputValue] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    let bgColor;
    let textColor;

    if (inputValue < 25) {
        bgColor = 'red';
        textColor = 'blue';
    }

    if (inputValue > 25 && inputValue < 50) {
        bgColor = 'green';
        textColor = 'purple';
    }
   
    if (inputValue > 50 && inputValue < 70) {
        bgColor = 'blue';
        textColor = 'white';
    }
    
    if (inputValue > 75 && inputValue <= 100) {
        bgColor = 'red';
        textColor = 'black';
    }


    return (
        <div>
            <Circle inputValue={inputValue} handleInputChange={handleInputChange} backgroundColor={bgColor} textColor={textColor}/>
        </div>
    );
}