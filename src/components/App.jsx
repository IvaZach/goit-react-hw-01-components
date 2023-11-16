import Profile from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
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
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
