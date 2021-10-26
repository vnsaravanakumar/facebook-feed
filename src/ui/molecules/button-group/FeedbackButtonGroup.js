import { FeedbackButton, FeedbackButtonType } from "../../atoms/buttons/FeedbackButton";
import "./FeedbackButtonGroup.scss";

export const FeedbackButtonGroup = (props) => {
    return (
        <div className="hdm-feedback-button-group">
            <FeedbackButton {...props} type={FeedbackButtonType.LIKE}/>
            <FeedbackButton type={FeedbackButtonType.COMMENT}/>
            <FeedbackButton type={FeedbackButtonType.SHARE}/>
        </div>
    )
}
