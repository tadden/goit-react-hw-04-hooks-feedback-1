import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ option, onClick }) {
  return (
    <button className={s[option]} type='button' onClick={onClick}>
      {option}
    </button>
  );
}

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Button };
