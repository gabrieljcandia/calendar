import React from "react";
import {Col} from "react-bootstrap";

const Day = (props) => {
    return(
        <Col>
            <p>{`${props.day.getDate()}`}</p>
        </Col>
    );
}

export default Day;