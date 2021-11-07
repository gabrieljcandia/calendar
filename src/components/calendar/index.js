import React from 'react';
import CalendarHeader from "../calendar-header";
import CalendarBody from "../calendar-body";
import AddRemainderButton from "../buttons/AddRemainderButton";
import ReminderModal from "../reminder-modal";
import {Container} from "react-bootstrap";

const Calendar = () => {
    return (
        <Container>
            <CalendarHeader/>
            <CalendarBody/>
            <AddRemainderButton/>
            <ReminderModal/>
        </Container>
    );
};

export default Calendar;