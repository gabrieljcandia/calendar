import _ from "lodash";
import {DAYS_OF_WEEK} from "../../constants/dates";
import React from "react";
import './styles.css';

const DaysOfWeek = () => {
    return (
        <thead>
            <tr>
                {_.map(DAYS_OF_WEEK, dayOfWeek =>
                    <th key={dayOfWeek.name} className="dayOfWeek">
                        {dayOfWeek.name}
                    </th>
                )}
            </tr>
        </thead>
    );
}

export default DaysOfWeek;