import CalendarItem from "../CalendarItem/CalendarItem";
import "./CalendarList.css"
import { useState } from "react";

function deltaDate(date, delta) {
  const result = new Date();
  result.setDate(date.getDate()-delta);
  return result;
}

function CalendarList({date, setDate}) {

    const [isActive, setIsActive] = useState(3);
    // date.setDate(date.getDate()-20)
    
    
  return (
    <div className="list"  >
        <CalendarItem onActive={() =>setIsActive(0)} isActive={isActive === 0} date = {deltaDate(date, 3)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(1)} isActive={isActive === 1} date = {deltaDate(date, 2)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(2)} isActive={isActive === 2} date = {deltaDate(date, 1)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(3)} isActive={isActive === 3} date = {deltaDate(date, 0)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(4)} isActive={isActive === 4} date = {deltaDate(date, -1)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(5)} isActive={isActive === 5} date = {deltaDate(date, -2)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(6)} isActive={isActive === 6} date = {deltaDate(date, -3)} setDate = {setDate}/>
        
    </div>
  )
}

export default CalendarList;