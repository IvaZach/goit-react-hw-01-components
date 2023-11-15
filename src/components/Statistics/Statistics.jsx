import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

export const Statistics = ({ id, label, percentage }) => {
  return (
    
      <li className={css.item} key={id}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
