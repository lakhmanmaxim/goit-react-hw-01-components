import user from "../data/user.json"
import Profile from "./Profile/Profile.jsx";
import statisticData from "../data/statisticData.json"
import Statistics from "./Statistics/Statistics.jsx";
import FriendsList from "./FriendList/FriendList.jsx";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx"

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
      
<Statistics title="Upload stats" stats={statisticData} />
      {/* <Statistics stats={data} /> */}

      <FriendsList friendsData={friends} />

      <TransactionHistory items={transactions} />;
      
    </>
  );
};
