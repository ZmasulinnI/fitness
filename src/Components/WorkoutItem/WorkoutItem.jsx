import "./WorkoutItem.css"
import { trainers } from "../../db";
import clockLogo from '../../assets/clock.svg'
import membersLogo from '../../assets/members.svg'

function WorkoutItem({workoutName, trainerId, datetimeStart, membersCount, slotsCount}) {
    const trenerName = trainers.find(item => item.trainerId == trainerId)
    const timeStart = new Date(datetimeStart * 1000);

  return (
    <div className="workout-item">
      <div className="workout-item__logo">Logo</div>
      <div className="workout-item__info">
          <p className="info__workname">{workoutName}</p>
          <p className="info__trener-text">Тренер</p>
          <p className="info__trener-name">{trenerName.fullName}</p>
      </div>
      <div className="workout-item__date">
        <div className="date__time">
          <img src={clockLogo} alt="no_logo" className="time__logo"/>
          <p className="time__number">{timeStart.getHours()}:{(timeStart.getMinutes()<10)? '0'+timeStart.getMinutes():timeStart.getMinutes()}</p>
        </div>
        <div className="date__members">
          <img src={membersLogo} alt="no_logo" className="time__logo"/>
          <p className="time__number">{membersCount}/{slotsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkoutItem;
