import { Video } from "../../atoms/details/Video";
import { Image } from "../../atoms/details/Image";
import PropTypes from 'prop-types';
import "./FeedDetails.scss";

const ContentType = {
	VIDEO: "video",
	IMAGE: "image"
}

const renderContent = ({ contentType, contentUrl, contentTitle, contentButton = {} }) => {
    if(contentType === ContentType.VIDEO) return <Video url={contentUrl} alt={contentTitle}/>
    if(contentType === ContentType.IMAGE) return <Image src={contentUrl} alt={contentTitle}/>
}

const FeedDetails = ({userText, content}) => {
    const { contentType, contentUrl, contentTitle, contentButton = {} } = content;
    return content && (
        
        <div className="hdm-details-container">
            <div className="hd-details-user-text">{userText}</div>
            <div className="hd-details-content">
                {renderContent(content)}
            </div>
        </div>
    )
}

FeedDetails.propTypes = {
    userText: PropTypes.string,
    content: PropTypes.shape({
        contentType: PropTypes.string.isRequired,
        contentUrl: PropTypes.string.isRequired,
        contentTitle: PropTypes.string.isRequired,
        contentButton: PropTypes.shape({
            text: PropTypes.string,
            link: PropTypes.string
        })
    })
};

export default FeedDetails;