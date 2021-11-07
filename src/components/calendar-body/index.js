import React from "react";
import _ from "lodash";
import {getDatesAfterMonth, getDatesBeforeMonth, getDatesOfMonth} from "./logic";
import {selectCurrentDate} from "../../store/date/reducer";
import {connect} from "react-redux";
import DaysOfWeek from "./DaysOfWeek";
import Day from "./Day";
import './styles.css';

export const ROWS = 6;
export const DAYS_OF_WEEK_COUNT = 7;
export const NUMBER_OF_DAYS_TO_DISPLAY = ROWS * DAYS_OF_WEEK_COUNT;

const CalendarBody = ({currentDate}) => {
    const datesBeforeMonth = getDatesBeforeMonth(currentDate);
    const datesOfMonth = getDatesOfMonth(currentDate);
    const datesAfterMonth = getDatesAfterMonth(currentDate);
    const datesToShow = _.union(datesBeforeMonth, datesOfMonth, datesAfterMonth);

    return (
        <table>
            <DaysOfWeek/>
            <tbody>
                {_.chunk(datesToShow, DAYS_OF_WEEK_COUNT).map((daysRow, rowIndex) =>
                    <DaysRow
                        key={rowIndex}
                        days={daysRow}
                    />
                )}
            </tbody>
        </table>
    );
};

const DaysRow = ({days}) => {
    return (
        <tr>
            {days.map(day =>
                <Day
                    key={day.toLocaleString()}
                    day={day}
                />
            )}
        </tr>
    );
};

const mapStateToProps = (state) => {
    return {
        currentDate: selectCurrentDate(state)
    }
}

export default connect(mapStateToProps)(CalendarBody);