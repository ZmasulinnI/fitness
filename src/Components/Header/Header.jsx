import CalendarList from "./CalendarList/CalendarList";
import "./Header.css"
import MainHeader from "./MainHeader/MainHeader";


function Header({date, setDate}) {

    return (
        <div className="header_main">
            <MainHeader date={date} setDate={setDate}/>
            <CalendarList date={date} setDate={setDate}/>
        </div>
    )
}

export default Header;
