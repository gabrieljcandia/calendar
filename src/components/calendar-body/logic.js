import {addDays, getDayOfWeek, getFirstDayOfMonth, getLastDayOfMonth, removeDays} from "../../utils/date-utils";
import _ from "lodash";
import {DAYS_OF_WEEK} from "../../constants/dates";
import {NUMBER_OF_DAYS_TO_DISPLAY} from "./";

export const getDatesOfMonth = (currentDate) => {
    const lastDayOfMonth = getLastDayOfMonth(currentDate);
    const daysOfMonth = [...Array(lastDayOfMonth.getDate() + 1).keys()].slice(1);
    return _.map(daysOfMonth, dayOfMonth => new Date(currentDate.getFullYear(), currentDate.getMonth(), dayOfMonth));
}

const getNumberOfDaysBeforeMonth = (currentDate) => {
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    return _.filter(DAYS_OF_WEEK, ['name', getDayOfWeek(firstDayOfMonth)])[0].order;
}

export const getDatesBeforeMonth = (currentDate) => {
    const numberOfDaysBeforeMonth = getNumberOfDaysBeforeMonth(currentDate);
    let daysBeforeMonth = [];
    _.rangeRight(1, numberOfDaysBeforeMonth + 1).forEach((dayBeforeMonth) => daysBeforeMonth.push(removeDays(getFirstDayOfMonth(currentDate), dayBeforeMonth)));
    return daysBeforeMonth;
}

export const getDatesAfterMonth = (currentDate) => {
    const numberOfDaysBeforeMonth = getNumberOfDaysBeforeMonth(currentDate);
    const numberOfDaysAfterMonth = NUMBER_OF_DAYS_TO_DISPLAY - getDatesOfMonth(currentDate).length - numberOfDaysBeforeMonth;
    let daysAfterMonth = [];
    _.range(1, numberOfDaysAfterMonth + 1).forEach((dayAfterMonth) => daysAfterMonth.push(addDays(getLastDayOfMonth(currentDate), dayAfterMonth)));
    return daysAfterMonth;
}