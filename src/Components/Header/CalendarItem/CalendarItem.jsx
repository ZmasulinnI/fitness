import "./CalendarItem.css"



function CalendarItem({onActive, isActive}) {
    

  return (
    <div className={isActive ? 'item active':'item'} onClick={onActive}>
        <p className="item__number">12</p>
        <p className="item__text">СР</p>
    </div>
  )
}

export default CalendarItem;
// active==" active"? "item" + active:"item"