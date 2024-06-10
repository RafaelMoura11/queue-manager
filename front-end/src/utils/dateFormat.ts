function parseDate(dateString: string) {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);

    const date = new Date(year, month - 1, day, hours, minutes, seconds);
    date.setHours(date.getHours() - 3);

    return date;
}

export default parseDate;
