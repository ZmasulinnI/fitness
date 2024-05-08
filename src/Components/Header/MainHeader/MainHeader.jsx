import * as React from "react"
import "./MainHeader.css"
import mainlogo from '../../../assets/mainlogo.svg'
import calendar from '../../../assets/calendar.svg'
import notifications from '../../../assets/notifications.svg'
import { user } from '../../../db'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "@/Components/ui/calendar"
import { Dialog, DialogContent } from "@/Components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"


function MainHeader({date, setDate}) {
    const now_date = new Date();
    const month = (now_date.toLocaleString('default', { month: 'long' })).charAt(0).toUpperCase() + (now_date.toLocaleString('default', { month: 'long' })).slice(1);
    const year = now_date.getFullYear();
    // console.log(date)

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
                <Dialog>
                    <DialogTrigger asChild>
                        <img src={calendar} alt="" />
                    </DialogTrigger>
                    <DialogContent className="w-fit">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(prop) => {
                                const result = new Date(date);
                                result.setDate(prop.getDate());
                                setDate(result)
                            }}
                            className="rounded-md border"
                            required
                        />
                    </DialogContent>
                </Dialog>
                <img src={notifications} alt="" />
                
            </div>
        </div>
    )
}

export default MainHeader;
