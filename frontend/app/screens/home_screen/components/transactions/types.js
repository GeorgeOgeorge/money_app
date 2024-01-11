import PropTypes from 'prop-types';

const propTypes = {
    transaction: PropTypes.shape({
        key: PropTypes.string.isRequired,
        type: PropTypes.number.isRequired,
    }).isRequired,
};

export default propTypes;
