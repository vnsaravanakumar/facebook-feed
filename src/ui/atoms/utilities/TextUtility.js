import { DateTime } from "luxon";

export const formatRatings = (rating) => {
    let formattedRating = rating;

    if(formattedRating < 1000) return formattedRating;

    return `${(formattedRating/1000).toFixed(1)}K`;
}