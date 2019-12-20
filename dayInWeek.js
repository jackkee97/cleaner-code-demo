function dayInWeek (value) {
    if (value < 0 || value > 6) return 'Invalid Value';
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][value];

}

module.exports = dayInWeek; 