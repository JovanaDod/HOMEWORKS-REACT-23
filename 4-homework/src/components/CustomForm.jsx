import { useState } from 'react';
import './CustomForm.css';

const CustomForm = () => {
    const [isValid, setIsValid] = useState(true);
    const [name, setName] = useState('');
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (name.trim().length === 0){
            setIsValid(false);
            return;
        }
        setIsValid(true);
        setName('');
    };
    
    const onChangeNameHandler = (event) => {
        setName(event.target.value);
        event.target.value.trim().length === 0 ? setIsValid(false) : setIsValid(true);
    };

    const buttonStyled = {
        border:isValid ? 'green' : 'blue',
        background:isValid ? 'green' : 'blue',
    };

    return (
        <div className="form-container">
            <form onSubmit={onSubmitHandler}>
                <div className={`form-control ${isValid ? '' : 'invalid'}`}>
                    <label>Name</label>
                    <input type="text" value={name} 
                    onChange={onChangeNameHandler} />
                </div>
                <button type="submit" style={buttonStyled}>Add</button>
            </form>
        </div>
        )

};

export default CustomForm;