import PropTypes from 'prop-types';

const Display = ({ expression }) => (
  <div className="display">
    {expression}
  </div>
);

Display.propTypes = {
  expression: PropTypes.string.isRequired,
};

export default Display;
