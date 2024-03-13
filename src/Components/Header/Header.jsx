import CalendarList from "./CalendarList/CalendarList";
import "./Header.css"
import MainHeader from "./MainHeader/MainHeader";


function Header() {
    

    return (
        <div className="header_main">
            <MainHeader></MainHeader>
            <CalendarList></CalendarList>
        </div>
    )
}

export default Header;
