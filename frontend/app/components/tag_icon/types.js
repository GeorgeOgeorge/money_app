import PropTypes from 'prop-types';

const propTypes = {
    circleIcon: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        iconCircleColor: PropTypes.string.isRequired,
    }).isRequired,
};

export default propTypes;
