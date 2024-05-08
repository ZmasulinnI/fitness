import CalendarItem from "../CalendarItem/CalendarItem";
import "./CalendarList.css"
import { useState } from "react";

function deltaDate(date, delta) {
  const result = new Date(date);
  result.setDate(date.getDate()-delta);
  return result;
}

function CalendarList({date, setDate}) {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="list">
        <CalendarItem onActive={() =>setIsActive(-3)} func ={setIsActive} isActive={false} date = {deltaDate(date, 3)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(-2)} func ={setIsActive} isActive={false} date = {deltaDate(date, 2)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(-1)} func ={setIsActive} isActive={false} date = {deltaDate(date, 1)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(0)} func ={setIsActive} isActive={true} date = {deltaDate(date, 0)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(1)} func ={setIsActive} isActive={false} date = {deltaDate(date, -1)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(2)} func ={setIsActive} isActive={false} date = {deltaDate(date, -2)} setDate = {setDate}/>
        <CalendarItem onActive={() =>setIsActive(3)} func ={setIsActive} isActive={false} date = {deltaDate(date, -3)} setDate = {setDate}/>
    </div>
  )
}

export default CalendarList;