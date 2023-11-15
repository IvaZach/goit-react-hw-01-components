import Profile from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import StatisticsList from './Statistics/StatisticsList';
import friends from './Friends/friends.json';
import FriendList from './Friends/FriendList';
import transactions from './Transactions/transactions.json';
import TransactionHistory from './Transactions/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <StatisticsList stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
