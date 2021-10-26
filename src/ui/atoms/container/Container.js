import PropTypes from 'prop-types';
import "./Container.scss";

const Container = ({children, ...props}) => {
    return (
        <div className="hda-container" {...props}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.element
};

export default Container;