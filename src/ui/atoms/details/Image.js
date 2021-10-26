import PropTypes from 'prop-types';
import "./Image.scss";

export const Image = (props) => {
    return (
        <img className="hda-details-image" {...props} /> 
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

