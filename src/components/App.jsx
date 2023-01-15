import Profile from "./Profile/Profile.jsx";
import user from "../data/user.json"
// console.log("🚀 ~ file: App.jsx:3 ~ user", user)

export const App = () => {
  return (
    <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </>
  );
};
