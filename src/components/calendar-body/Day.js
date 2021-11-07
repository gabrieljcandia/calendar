import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './styles.css';
import _ from "lodash";
import {sameDay, sameMonth} from "../../utils/date-utils";
import {selectReminder} from "../../store/reminder/action";
import {selectCurrentDate} from "../../store/date/reducer";
import Chip from '@mui/material/Chip';
import './styles.css';

const Day = (props) => {
    const [hovered, setHovered] = useState(false);
    const dispatch = useDispatch();
    const reminders = useSelector(state => state.reminder.all)
    const currentDay = useSelector(state => selectCurrentDate(state));
    const todayReminders = _.filter(reminders, (reminder) => sameDay(props.day, reminder.date));
    const todayRemindersOrdered = _.orderBy(todayReminders, ['time']);

    const noHoveredClass = sameMonth(props.day, currentDay) ? "sameMonth" : "otherMonth";

    return (
        <td
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={hovered ? "hovered" : noHoveredClass}
            onClick={() => dispatch(selectReminder({date: props.day}))}
        >
            <p className="dateNumber">{`${props.day.getDate()}`}</p>
            {todayRemindersOrdered.map(reminder =>
                <Reminder key={reminder.id} reminder={reminder}/>
            )}
        </td>
    );
}

const Reminder = ({reminder}) => {
    const dispatch = useDispatch();

    return (
        <div
            onMouseDown={() => dispatch(selectReminder({...reminder}))}
            className="task"
        >
            <Chip
                style={{background: reminder.color}}
                label={`${reminder.time} ${reminder.title}`}
            />
        </div>
    );
}

export default Day;