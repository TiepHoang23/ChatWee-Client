import { useState } from "react";

const InputComponent = (props) => {

    const { styling, placeholder } = props;

    const [input, setInput] = useState('');

    return (
        <input className={styling} placeholder={placeholder} value={input} onChange={(e) => setInput(e.target.value)}></input>
    );
}

export default InputComponent;