import "./CalendarItem.css"



function CalendarItem({onActive, isActive, date, setDate}) {
  const date_day = date.getDate();
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
    <div className={isActive ? 'item active':'item'} onClick={() => setDate(date)}>
        <p className="item__number">{date_day}</p>
        <p className="item__text">{daysOfWeek[date.getDay()]}</p>
    </div>
  )
}

export default CalendarItem;