import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import css from "./Statistics.module.css"

function StatisticsList({ stats, title }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.stat_list}>
{stats.map(stat => (
      <Statistics
        key={stat.id}
        label={stat.label}
        percentage={stat.percentage}
      />
    
  )) }</ul></section> )
}

StatisticsList.propTypes = {
  title: PropTypes.string,
};

export default StatisticsList;
