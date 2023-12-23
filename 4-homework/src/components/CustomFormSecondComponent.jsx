import { useState } from 'react';
import styled from 'styled-components';
import Button from './CustomFormSecondComponent.module.css';

const FormContainer = styled.div`
display: flex;
flex-direction: column;
border: 2px solid pink;
border-radius: 10px;
width: 20%;
height: 100px;
align-items: center;`

const FormControl = styled.div`
display: flex;
flex-direction: column;
align-items: center;

& input {
    border-color:${props => props.valid ? '#ccc' : 'pink'};
    background: ${props => props.valid ? 'blueviolet' : '#ffd7d7'};
}

& label {
    color:${props => props.valid ? 'black' : 'green'};
}`;


const CustomFormSecondComponent = () => {
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



    return (
        <FormContainer>
            <form onSubmit={onSubmitHandler}>
                <FormControl valid={isValid}>
                    <label>Name</label>
                    <input type="text" value={name} 
                    onChange={onChangeNameHandler} />
                </FormControl>
                <button type='submit' className={`${['btn']} ${!isValid && Button.btn}`}>Add</button>
            </form>
        </FormContainer>
        )

};

export default CustomFormSecondComponent;