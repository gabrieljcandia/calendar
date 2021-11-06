export const dateToMonthEnUs = (date) => date.toLocaleString('en-us', { month: 'short' });
export const addMonths = (date, monthsToAdd) => new Date(date.setMonth(date.getMonth() + monthsToAdd));
export const addDays = (date, daysToRemove) => new Date(date.setDate(date.getDate() + daysToRemove));
export const removeMonths = (date, monthsToRemove) => new Date(date.setMonth(date.getMonth() - monthsToRemove));
export const removeDays = (date, daysToRemove) => new Date(date.setDate(date.getDate() - daysToRemove));
export const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1)
export const getLastDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
export const getDayOfWeek = (date) => date.toLocaleDateString('en-us', { weekday: 'long' });