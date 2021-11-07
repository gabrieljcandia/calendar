import React from "react";
import {increaseCurrentMonth, decreaseCurrentMonth} from "../../store/date/action";
import {selectCurrentDate} from "../../store/date/reducer";
import {connect} from "react-redux";
import {Row, Col} from 'react-bootstrap';
import {dateToMonthEnUs} from "../../utils/date-utils";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Fab} from "@mui/material";
import './styles.css';

const CalendarHeader = ({currentDate, increaseCurrentMonth, decreaseCurrentMonth}) => {
    const monthName = dateToMonthEnUs(currentDate);

    return (
        <Row fluid="true" className="calendarHeader">
            <Col>
                <Fab onClick={() => decreaseCurrentMonth(12)}>
                    <ArrowBackIosIcon />
                </Fab>
                <Fab onClick={() => decreaseCurrentMonth(1)} size="small">
                    <ArrowBackIcon />
                </Fab>
            </Col>
            <Col className="date">
                {`${monthName} ${currentDate.getFullYear()}`}
            </Col>
            <Col>
                <Fab onClick={() => increaseCurrentMonth(1)} size="small">
                    <ArrowForwardIcon />
                </Fab>
                <Fab onClick={() => increaseCurrentMonth(12)}>
                    <ArrowForwardIosIcon />
                </Fab>
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