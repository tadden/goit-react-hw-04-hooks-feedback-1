import PropTypes from 'prop-types';
import { Percentage } from '../Percentage';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total }) {
  const countPercentage = amount => Math.round((amount / total) * 100) || 0;

  return (
    <>
      <table className={s.statistics}>
        <thead>
          <tr>
            <th>Good</th>
            <th>Neutral</th>
            <th>Bad</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{good}</td>
            <td>{neutral}</td>
            <td>{bad}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <h3>Percentages</h3>

        <div className={s.scale}>
          <Percentage option='good' percentage={countPercentage(good)} />
          <Percentage option='neutral' percentage={countPercentage(neutral)} />
          <Percentage option='bad' percentage={countPercentage(bad)} />
        </div>
      </div>

      <p className={s.total}>
        Total <span>{total}</span>
      </p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export { Statistics };
