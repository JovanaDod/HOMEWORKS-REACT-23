import GoalCard from "./components/GoalCard";
import InputForm from "./components/InputForm";
import { useState } from "react";

function App() {
  const GOALS = [
    {
      day:'Workout',
      id:0,
    },
    {
      day:'Read a Book',
      id:1,
      
    },

    {
      day:'Hiking',
      id:3,
      
    },
    {
      day:'Run',
      id:4,
      
    },
    {
      day:'Write code',
      id:5,
     
    }
];
   const [goal, setGoal] = useState(GOALS);

   const addGoal = (goal) => {
    setGoal((currentGoals) => {
      return [...currentGoals, goal];
    });
    
   }
  
   return (
    <div>
      <InputForm addGoalsHandler={addGoal}></InputForm>
      {
        goal.map((goal) => {
          return <GoalCard key={goal.id} goal={goal}></GoalCard>
        })
      }
     
     </div>
  );
}

export default App;

// import PersonCard from "./components/PersonCard";
// import InputForm from "./components/InputForm";
// import React, { useState } from "react";

// function App() {
//   const [goals, setGoals] = useState([
//     {
//       day: 'Workout',
//       id: 0,
//     },
//     {
//       day: 'Read a Book',
//       id: 1,
//     },
//     {
//       day: 'Hiking',
//       id: 2,
//     },
//     {
//       day: 'Run',
//       id: 3,
//     },
//     {
//       day: 'Write code',
//       id: 4,
//     },
//   ]);

//   const addGoal = (newGoal) => {
//     setGoals((prevGoals) => [...prevGoals, newGoal]);
//   }

//   return (
//     <div>
//       <InputForm addGoalsHandler={addGoal} />
//       {goals.map((goal) => (
//         <PersonCard key={goal.id} goal={goal} />
//       ))}
//     </div>
//   );
// }

// export default App;
