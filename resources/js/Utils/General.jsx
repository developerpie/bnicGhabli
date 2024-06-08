export const getMonthName = (monthNumber) => {
    const date = new Date(2023, monthNumber - 1, 1);
    return date.toLocaleString('default', { month: 'short' });
};
