import PropTypes from 'prop-types';
import styles from "./FriendList.module.css"




export const FriendsListItem = ({ name, avatar, isOnline }) => {
        
    const status = isOnline ? <span className={styles.active}></span> : <span className={styles.status_not_active}></span>;

    return (
        <li className={styles.item}>
            { status }
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            
            <p className={styles.name}>{name}</p>
        </li>
    )   
          
        
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}