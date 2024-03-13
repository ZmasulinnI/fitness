import "./MainHeader.css"
import mainlogo from '../../../assets/mainlogo.svg'
import calendar from '../../../assets/calendar.svg'
import notifications from '../../../assets/notifications.svg'
import { user } from '../../../db'
import { datepicker } from "js-datepicker"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";


function MainHeader() {
    const date = new Date();
    const month = (date.toLocaleString('default', { month: 'long' })).charAt(0).toUpperCase() + (date.toLocaleString('default', { month: 'long' })).slice(1);
    const year = date.getFullYear();


    return (
        <div className="header">
            <div className="header__left-side">
                <a href=""><img src={mainlogo} alt="" /></a>
                <div className="welcome">
                    <p className="welcome__text">Привет, {user.UserName}.</p>
                    <p className="welcome__date">{month}, {year}</p>
                </div>
            </div>
            <div className="header__right-side">
                <img src={calendar} alt="" />
                <img src={notifications} alt="" />
                <DatePicker></DatePicker>   
                {/* <input className="text-input" type="text" id='date_pick'></input> */}
            </div>
        </div>
    )
}

export default MainHeader;
