import React from "react";
import {Container, Row} from "react-bootstrap";
import _ from "lodash";
import {getDatesAfterMonth, getDatesBeforeMonth, getDatesOfMonth} from "./logic";
import {selectCurrentDate} from "../../store/date/reducer";
import {connect} from "react-redux";
import DaysOfWeek from "./DaysOfWeek";
import Day from "./Day";

export const ROWS = 6;
export const DAYS_OF_WEEK_COUNT = 7;
export const NUMBER_OF_DAYS_TO_DISPLAY = ROWS * DAYS_OF_WEEK_COUNT;

const CalendarBody = ({currentDate}) => {
    const datesBeforeMonth = getDatesBeforeMonth(currentDate);
    const datesOfMonth = getDatesOfMonth(currentDate);
    const datesAfterMonth = getDatesAfterMonth(currentDate);
    const datesToShow = _.union(datesBeforeMonth, datesOfMonth, datesAfterMonth);

    return (
        <Container fluid>
            <DaysOfWeek/>
            {_.chunk(datesToShow, DAYS_OF_WEEK_COUNT).map((daysRow, rowIndex) =>
                <DaysRow
                    key={rowIndex}
                    days={daysRow}
                />
            )}
        </Container>
    );
};

const DaysRow = ({days}) => {
    return (
        <Row xs={DAYS_OF_WEEK_COUNT}>
            {days.map(day =>
                <Day
                    key={day.toLocaleString()}
                    day={day}
                />
            )}
        </Row>
    );
};

const mapStateToProps = (state) => {
    return {
        currentDate: selectCurrentDate(state)
    }
}

export default connect(mapStateToProps)(CalendarBody);