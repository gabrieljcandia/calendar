import {Col, Row} from "react-bootstrap";
import _ from "lodash";
import {DAYS_OF_WEEK} from "../../constants/dates";
import React from "react";
import {DAYS_OF_WEEK_COUNT} from "./index";

const DaysOfWeek = () => {
    return (
        <Row xs={DAYS_OF_WEEK_COUNT}>
            {_.map(DAYS_OF_WEEK, dayOfWeek =>
                <Col key={dayOfWeek.name}>{dayOfWeek.name}</Col>
            )}
        </Row>
    );
}

export default DaysOfWeek;