import { formatRatings } from "../../atoms/utilities/TextUtility";
import "./FeedFooter.scss";

const FeedFooter = ({emojiGroup, feedbackButtonGroup}) => {
    return (
        <div className="hdm-feed-footer">
            <div className="hd-footer-info">
                <div className="hd-like-info">
                    {emojiGroup}
                    <div>{formatRatings(10)}</div>
                </div>
                <div className="hd-comment-share-info">
                    <span>{formatRatings(2122)} Comments</span>
                    <span>{formatRatings(61342)} Shares</span>
                </div>
            </div>
            <div className="hd-footer-button">{feedbackButtonGroup}</div>
        </div>
    )
}

export default FeedFooter;