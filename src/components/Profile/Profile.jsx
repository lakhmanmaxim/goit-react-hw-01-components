import styles from "./profile.module.css";
import PropTypes from 'prop-types';

const Profile = ({username, tag, location, avatar, stats}) => {
return (
    <>
    <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      className={styles.avatar}
      alt="User avatar"
      width="200"
      height = "200"
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.stats_item}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.stats_item}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li  className={styles.stats_item}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
</>
)
}

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
  })
}