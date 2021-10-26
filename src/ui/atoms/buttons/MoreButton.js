import PropTypes from 'prop-types';
import "./MoreButton.scss";
import more from "./images/more.svg";

export const MoreButton = (props) => {
    return (
        <img className="hda-more" src={more} {...props} /> 
    )
}

MoreButton.propTypes = {
    alt: PropTypes.string
}

MoreButton.defaultProps = {
    alt: "more"
}