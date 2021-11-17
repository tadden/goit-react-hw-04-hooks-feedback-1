import PropTypes from 'prop-types';
import s from './Percentage.module.css';

function Percentage({ option, percentage }) {
  return (
    <span className={s[option]} style={{ width: percentage + '%' }}>
      {percentage > 6 && percentage + '%'}
    </span>
  );
}

Percentage.propTypes = {
  option: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export { Percentage };
