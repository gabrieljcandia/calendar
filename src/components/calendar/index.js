import React from 'react';
import CalendarHeader from "../calendar-header";
import CalendarBody from "../calendar-body";
import AddReminderButton from "../buttons/AddReminderButton";
import ReminderModal from "../reminder-modal";
import {Container} from "react-bootstrap";

const Calendar = () => {
    return (
        <Container>
            <CalendarHeader/>
            <CalendarBody/>
            <AddReminderButton/>
            <ReminderModal/>
        </Container>
    );
};

export default Calendar;