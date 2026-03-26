// src/Components/Button.jsx
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className }) => (
  <button type="button" className={className} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
