import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

function StatisticsList({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload</h2>
{stats.map(stat => (
      <Statistics
        key={stat.id}
        label={stat.label}
        percentage={stat.percentage}
      />
    
  )) }</section> )
}

StatisticsList.propTypes = {
  title: PropTypes.string,
};

export default StatisticsList;
