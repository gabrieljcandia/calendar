import React from "react";
import {Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import './styles.css';
import _ from "lodash";
import {sameDay} from "../../utils/date-utils";
import {selectReminder} from "../../store/reminder/action";

const Day = (props) => {
    const reminders = useSelector(state => state.reminder.all)
    const todayReminders = _.filter(reminders, (reminder) => sameDay(props.day, reminder.date));

    return (
        <Col>
            <p>{`${props.day.getDate()}`}</p>
            {todayReminders.map(reminder =>
                <Reminder key={reminder.id} reminder={reminder}/>
            )}
        </Col>
    );
}

const Reminder = ({reminder}) => {
    const dispatch = useDispatch();

    return (
        <div onMouseDown={() => dispatch(selectReminder({...reminder}))}>
            <p>{reminder.time} {reminder.title}</p>
        </div>
    );
}

export default Day;