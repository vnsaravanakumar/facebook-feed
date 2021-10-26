import { DateTime } from "luxon";

export const getFormattedDate = (time) => {
    let end = DateTime.now();
    let start = DateTime.fromJSDate(new Date(time));

    const diff = end.diff(start, ['years', 'months', 'days', 'hours']);

    if(diff.years > 0){
        return `${Math.floor(diff.years)} years ago`;
    }else if(diff.months > 0){
        return `${Math.floor(diff.months)} months ago`; 
    }else if(diff.days >= 7){
        return `${Math.floor(diff.days/7)} weeks ago`;
    }else if(diff.days < 7 && diff.days > 1){
        return `${Math.floor(diff.days)}d`;
    }else{
        return `${Math.floor(diff.hours)}h`;
    }
}