import "./Video.scss";
import PropTypes from 'prop-types';

export const Video = (props) => {
    return (
        <video className="hda-details-video" controls {...props}>
            <source src={props.url} />
        </video>
    )
}

Video.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};
