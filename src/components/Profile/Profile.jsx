import "./profile.css";

const Profile = ({username, tag, location, avatar, stats}) => {
return (
    <>
    <div className="profile">
  <div className="description">
    <img
      src={avatar}
      className="avatar"
      alt="User avatar"
      width="200"
      height = "200"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li className="stats-item">
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className="stats-item">
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li  className="stats-item">
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
</>
)
}


export default Profile;