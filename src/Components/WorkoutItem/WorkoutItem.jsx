import "./WorkoutItem.css"
import { trainers } from "../../db";

function WorkoutItem({workoutName, trainerId}) {
    const trenerName = trainers.find(item => item.trainerId == trainerId)

  return (
    <div className="workout-item">
      <div className="workout-item__logo">Logo</div>
      <div className="workout-item__info">
        <div className="info">
            <p className="info__workname">{workoutName}</p>
            <p className="info__trener-text">Тренер</p>
            <p className="info__trener-name">{trenerName.fullName}</p>
        </div>
      </div>
      <div className="workout-item__date">Date</div>
    </div>
  )
}

export default WorkoutItem;
