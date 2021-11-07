import React from 'react';
import CalendarHeader from "../calendar-header";
import CalendarBody from "../calendar-body";
import AddRemainderButton from "../buttons/AddRemainderButton";
import ReminderModal from "../reminder-modal";

const Calendar = () => {
    return (
        <>
            <CalendarHeader/>
            <CalendarBody/>
            <AddRemainderButton/>
            <ReminderModal/>
        </>
    );
};

export default Calendar;