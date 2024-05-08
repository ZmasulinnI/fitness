import "./CalendarItem.css"
import { motion } from "framer-motion";
import { Transition } from 'react-transition-group';

function normalizeDate(date) {
  const month   = date.getUTCMonth() + 1; 
  const day     = date.getUTCDate();
  const year    = date.getUTCFullYear();

  const newDate = day + "/" + month + "/" + year;
  return newDate;
}

function CalendarItem({onActive, func, isActive, date, setDate}) {  
  const date_day = date.getDate();
  // console.log(normalizeDate(date));
  var daysOfWeek = [
    'ВС',
    'ПН',
    'ВТ',
    'СР',
    'ЧТ',
    'ПТ',
    'СБ'
  ];
  return (
    <div
    className={(isActive ? 'item active ':'item ') }
    onClick={() => {
      onActive()
      setDate(date)
    }}
    
    >
        <p className="item__number">{date_day}</p>
        <p className="item__text">{daysOfWeek[date.getDay()]}</p>
        {normalizeDate(new Date()) == normalizeDate(date) ? <div className="circle"/> : null}
    </div>
  )
}
// () => setDate(date)
export default CalendarItem;