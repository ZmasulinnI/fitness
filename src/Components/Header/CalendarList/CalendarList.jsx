import CalendarItem from "../CalendarItem/CalendarItem";
import "./CalendarList.css"
import { useState } from "react";



function CalendarList() {

    const [isActive, setIsActive] = useState(3);

  return (
    <div className="list"  >
        <CalendarItem onActive={() =>setIsActive(0)} isActive={isActive === 0}/>
        <CalendarItem onActive={() =>setIsActive(1)} isActive={isActive === 1}/>
        <CalendarItem onActive={() =>setIsActive(2)} isActive={isActive === 2} />
        <CalendarItem onActive={() =>setIsActive(3)} isActive={isActive === 3} />
        <CalendarItem onActive={() =>setIsActive(4)} isActive={isActive === 4} />
        <CalendarItem onActive={() =>setIsActive(5)} isActive={isActive === 5} />
        <CalendarItem onActive={() =>setIsActive(6)} isActive={isActive === 6} />
        
    </div>
  )
}

export default CalendarList;