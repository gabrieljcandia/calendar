import React from "react";
import {increaseCurrentMonth, decreaseCurrentMonth} from "../../store/date/action";
import {Row, Col} from 'react-bootstrap';
import {dateToMonthEnUs} from "../../utils/date-utils";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Fab} from "@mui/material";
import './styles.css';
import {useDispatch, useSelector} from "react-redux";

const CalendarHeader = () => {
    const dispatch = useDispatch();
    const currentDate = useSelector(state => state.date);
    const monthName = dateToMonthEnUs(currentDate);

    const increaseMonth = (amount) => dispatch(increaseCurrentMonth(amount));
    const decreaseMonth = (amount) => dispatch(decreaseCurrentMonth(amount));

    return (
        <Row fluid="true" className="calendarHeader">
            <Col>
                <Fab onClick={() => decreaseMonth(12)}>
                    <ArrowBackIosIcon />
                </Fab>
                <Fab onClick={() => decreaseMonth(1)} size="small">
                    <ArrowBackIcon />
                </Fab>
            </Col>
            <Col className="date">
                {`${monthName} ${currentDate.getFullYear()}`}
            </Col>
            <Col>
                <Fab onClick={() => increaseMonth(1)} size="small">
                    <ArrowForwardIcon />
                </Fab>
                <Fab onClick={() => increaseMonth(12)}>
                    <ArrowForwardIosIcon />
                </Fab>
            </Col>
        </Row>
    );
}

export default CalendarHeader;