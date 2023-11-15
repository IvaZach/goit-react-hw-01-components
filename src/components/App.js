import ProfileList from './Profile/ProfileList';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import StatisticsList from './Statistics/StatisticsList';

export default function App() {
  return (
    <div>
      <ProfileList users={user} />
      
        <StatisticsList title="Upload stats" stats={data} />
        <StatisticsList stats={data} />
      
    </div>
  );
}
