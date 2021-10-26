import PropTypes from 'prop-types';
import "./ProfileImage.scss";

export const ProfileImage = ({url, altText}) => {
    return (
        <img className="hda-profile-image" src={url} alt={altText}/>
    )
}

ProfileImage.propTypes = {
    url: PropTypes.string.isRequired,
    altText: PropTypes.string
}

ProfileImage.defaultProps = {
    altText: ""
}