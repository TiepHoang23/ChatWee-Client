const InputComponent = (props) => {

    const { styling, placeholder } = props;

    return(
        <input className={styling} placeholder={placeholder}></input>
    );
}

export default InputComponent;