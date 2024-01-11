import PropTypes from 'prop-types';

const propTypes = {
    ballanceButton: PropTypes.shape({
        onPress: PropTypes.func,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default propTypes;
