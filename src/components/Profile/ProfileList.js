import Profile from './Profile';
import PropTypes from 'prop-types';

function ProfileList({ users }) {
  return (
    <div>
      {users.map(user => (
        <Profile
          key={user.id}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      ))}
    </div>
  );
}

ProfileList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};

export default ProfileList;
