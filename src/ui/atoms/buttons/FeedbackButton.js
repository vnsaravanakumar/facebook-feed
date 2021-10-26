import "./FeedbackButton.scss";

export const FeedbackButtonType = {
    LIKE: "Like",
    COMMENT: "Comment",
    SHARE: "Share"
}

const renderFeedbackButton = (type) => {
    switch(type){
        case FeedbackButtonType.LIKE:
            return <><i className="hd-icons hd-like" /><span>{FeedbackButtonType.LIKE}</span></>
        case FeedbackButtonType.COMMENT:
            return <><i className="hd-icons hd-comment" /><span>{FeedbackButtonType.COMMENT}</span></>
        case FeedbackButtonType.SHARE:
            return <><i className="hd-icons hd-share" /><span>{FeedbackButtonType.SHARE}</span></>
        default: 
            return
    }
}

export const FeedbackButton = ({type, ...props}) => {
    return (
        <div className="hda-feedback-button" {...props}>
            {renderFeedbackButton(type)}
        </div>
    )
     
}