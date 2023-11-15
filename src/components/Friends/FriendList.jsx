import css from './FriendList.module.css';


const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
        { isOnline ? 
          (<span className={ `${css.status} ${css.isOnlineStatus}`}></span>) :
          (<span className={css.status}></span>)}
          
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
