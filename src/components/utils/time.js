import moment from 'moment';
window.moment = moment;
export function getTime(time = new Date(), opt = {}) {
    let {
        fmt = 'YYYY-MM-DD',
        startOf,
        endOf,
        subtract,
        add,
    } = opt;
    if (startOf) {
        return getTimeStartOf(time, startOf, fmt);
    }
    if (endOf) {
        return getTimeEndOf(time, endOf, fmt);
    }
    if (subtract) {
        return getTimeSubtract(time, subtract[0], subtract[1], fmt);
    }
    if (add) {
        return getTimeAdd(time, add[0], add[1], fmt);
    }
    return moment(time).format(fmt);
}
export function getTimeStartOf(time = new Date(), startOf, fmt = 'YYYY-MM-DD') {
    return moment(time).startOf(startOf).format(fmt);
}
export function getTimeEndOf(time = new Date(), endOf, fmt = 'YYYY-MM-DD') {
    return moment(time).endOf(endOf).format(fmt);
}
export function getTimeSubtract(time = new Date, value = 0, type = 'days', fmt = 'YYYY-MM-DD') {
    return moment(time).subtract(value, type).format(fmt);
}
export function getTimeAdd(time = new Date, value = 0, type = 'days', fmt = 'YYYY-MM-DD') {
    return moment(time).add(value, type).format(fmt);
}
export function getTimeDaysInMonth(time = new Date()) {
    return moment(time).daysInMonth();
}
export function getTimeWeekday(time = new Date()) {
    return moment(time).weekday();
}