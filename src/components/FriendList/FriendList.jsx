import PropTypes from 'prop-types';
import styles from "./FriendList.module.css";
import { FriendsListItem } from "./FriendsListItem"

const FriendsList = ({ friendsData }) => {
           
    return (
        <ul className={styles.friend_list}>
            
            {friendsData.map(({ avatar, name, isOnline, id }) => (
                <FriendsListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />))}
            
        </ul>
    );
};

export default FriendsList;

FriendsList.propTypes = {
    friendsData: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }
    ))    
}