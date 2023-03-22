import propTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className="">
    <li className="">Good: {good}</li>
    <li className="">Neutral: {neutral}</li>
    <li className="">Bad: {bad}</li>
    <li className="">Total: {total}</li>
    <li className=""> Positive feedback: {positivePercentage} %</li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
