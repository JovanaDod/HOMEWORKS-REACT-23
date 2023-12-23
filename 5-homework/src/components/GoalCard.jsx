const GoalCard = (props) => {
    const { goal } = props;
    console.log(goal)
    return(
        <div style={{padding:'10px', border:'3px solid green'}}>
            <h3>{goal.day}</h3>
        </div>
    )
};


export default GoalCard;