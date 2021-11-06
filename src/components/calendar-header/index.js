import React from "react";
import {increaseCurrentMonth, decreaseCurrentMonth} from "../../store/date/action";
import {selectCurrentDate} from "../../store/date/reducer";
import {connect} from "react-redux";
import {Row, Col} from 'react-bootstrap';
import {dateToMonthEnUs} from "../../utils/date-utils";

const CalendarHeader = ({currentDate, increaseCurrentMonth, decreaseCurrentMonth}) => {
    const monthName = dateToMonthEnUs(currentDate);

    return (
        <Row fluid="true">
            <Col>
                <button onClick={() => decreaseCurrentMonth(12)}>{'<<'}</button>
                <button onClick={() => decreaseCurrentMonth(1)}>{'<'}</button>
            </Col>
            <Col>
                {`${monthName} ${currentDate.getFullYear()}`}
            </Col>
            <Col>
                <button onClick={() => increaseCurrentMonth(1)}>{'>'}</button>
                <button onClick={() => increaseCurrentMonth(12)}>{'>>'}</button>
            </Col>
        </Row>
    );
}

const mapStateToProps = (state) => {
    return {
        currentDate: selectCurrentDate(state)
    }
}

export default connect(mapStateToProps, {increaseCurrentMonth, decreaseCurrentMonth})(CalendarHeader);