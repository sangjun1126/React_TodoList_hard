import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓어요!</p>;
    }
    return <p>아직 물이 끓는 온도가 아니에요!</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c')
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('c')
    };

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput 
                scale = "c"
                temperature = {celsius}
                onTemperatureChange = {handleCelsiusChange}
            />

            <TemperatureInput 
                scale = 'f'
                temperature = {fahrenheit}
                onTemperatureChange = {handleFahrenheitChange}
            />
            <BoilingVerdict celsius = {parseFloat(celsius)} />
        </div>
    )
}

export default Calculator;