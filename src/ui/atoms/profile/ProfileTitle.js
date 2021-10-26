import PropTypes from 'prop-types';
import { getFormattedDate } from "../utilities/DateUtility";
import publicGlobe from "./images/public-globe.png";
import "./ProfileTitle.scss";

export const ProfileTitle = ({profile, feedType, postDate}) => {
    const { profileName, groupName } = profile;
    return (
        <div className="hda-profile-content">
            <div className="hd-profile-name">{feedType === "person" ? profileName : groupName}</div>
            <div className="hd-post-date">
                <span>{getFormattedDate(postDate)}</span>
                <img className="hd-icon-small" src={publicGlobe} />
            </div>
        </div>
    )
}

ProfileTitle.propTypes = {
    profile: PropTypes.string.isRequired,
    feedType: PropTypes.string.isRequired,
    postDate: PropTypes.shape({
        profileName: PropTypes.string, 
        groupName: PropTypes.string
    }).isRequired
}