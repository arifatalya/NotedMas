// eslint-disable-next-line no-unused-vars
const useCreateDate = () => {
    const dateObj = new Date();
    let month = dateObj.getMonth();
    let monthName;
    switch(month) {
        case 0: monthName = "January"; break;
        case 1: monthName = "February"; break;
        case 2: monthName = "March"; break;
        case 3: monthName = "April"; break;
        case 4: monthName = "May"; break;
        case 5: monthName = "June"; break;
        case 6: monthName = "July"; break;
        case 7: monthName = "August"; break;
        case 8: monthName = "September"; break;
        case 9: monthName = "October"; break;
        case 10: monthName = "November"; break;
        case 11: monthName = "December"; break;
    }
    let year = dateObj.getFullYear();
    const date = `${monthName} ${dateObj.getDate()}, ${year} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
    return date;
}