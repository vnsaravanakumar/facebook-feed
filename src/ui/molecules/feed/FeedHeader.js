import { ProfileTitle } from "../../atoms/profile/ProfileTitle";
import { ProfileImage } from "../../atoms/profile/ProfileImage";
import { MoreButton } from "../../atoms/buttons/MoreButton";
import "./FeedHeader.scss";

const FeedHeader = ({profile, feedType, postDate}) => {
    return (
        <div className="hdm-header-container">
            <ProfileImage {...profile.profileImage} />
            <ProfileTitle {...{profile, feedType, postDate}} />
            <MoreButton />
        </div>
    )
}

export default FeedHeader;