import WorkoutItem from "../WorkoutItem/WorkoutItem";
import "./WorkoutList.css"
import { schedule11 } from "../../db";

function WorkoutList() {

    const workComponents = schedule11.map(item => <WorkoutItem key={item.workoutID} workoutName={item.workoutName} trainerId={item.trainerId} />)
    return (
        <>
            {workComponents}
        </>
    )

}

export default WorkoutList;
