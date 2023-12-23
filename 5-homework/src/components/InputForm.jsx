// import { useState } from "react";
// import styles from './InputForm.module.css';

// const InputForm = (props) => {
//     const [goal, setGoal] = useState('');
//     const [isValid, setIsValid] = useState(true);

//     const onChangeGoalHandler = (event) => {
//         setGoal(event.target.value);
//     };
    

//     const onSubmitFormHandler = (event) => {
//         event.preventDefault();
        
//         const newGoal = {
//             day:day,
//             id:Math.random()
//         };
        
//         props.addGoalsHandler(newGoal);
//     };
    
//     return(
//         <form onSubmit={onSubmitFormHandler}>
//             <div className={styles['form-container']}>
//                 <label>Goals</label>
//                 <input type="text" onChange={onChangeGoalHandler} value={goal}></input>
//                 <button type="submit">Add goals</button>
//             </div>
//         </form>
//     )
// };

// export default InputForm;

import { useState } from "react";
import styles from './InputForm.module.css';

const InputForm = (props) => {
    const [goal, setGoal] = useState('');
    const [isValid, setIsValid] = useState(true);

    const onChangeGoalHandler = (event) => {
        setGoal(event.target.value);
    };

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        const newGoal = {
            day:goal,
            id: Math.random(),
        };

        props.addGoalsHandler(newGoal);
    };

    return (
        <form onSubmit={onSubmitFormHandler}>
            <div className={styles['form-container']}>
                <label>Goals</label>
                <input type="text" onChange={onChangeGoalHandler} value={goal} />
                <button type="submit">Add goals</button>
            </div>
        </form>
    );
};

export default InputForm;
