const EN_US = 'en-us';

const getMinutesTwoDigits = (date) => date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
export const sameDay = (date1, date2) => dateToIsoString(date1) === dateToIsoString(date2);
export const dateToIsoString = (date) => date.toISOString(EN_US).split('T')[0];
export const dateToHourMin = (date) => `${date.getHours()}:${getMinutesTwoDigits(date)}`;
export const dateToMonthEnUs = (date) => date.toLocaleString(EN_US, { month: 'short' });
export const addMonths = (date, monthsToAdd) => new Date(date.setMonth(date.getMonth() + monthsToAdd));
export const addDays = (date, daysToRemove) => new Date(date.setDate(date.getDate() + daysToRemove));
export const removeMonths = (date, monthsToRemove) => new Date(date.setMonth(date.getMonth() - monthsToRemove));
export const removeDays = (date, daysToRemove) => new Date(date.setDate(date.getDate() - daysToRemove));
export const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1)
export const getLastDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
export const getDayOfWeek = (date) => date.toLocaleDateString(EN_US, { weekday: 'long' });