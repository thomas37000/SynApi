import PropTypes from 'prop-types';

const childrenPropType = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default childrenPropType;
