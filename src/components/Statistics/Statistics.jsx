import PropTypes from 'prop-types';
import styles from "./Statistics.module.css";
import { getRandomHexColor } from "../../GetRandomColor/getRandomHexColor.js";

const Statistics = ({title, stats}) => {
    
    const h2 = title ? <h2 className={styles.title}>{title}</h2> : "";

  const items = stats.map(stat => 
    <li key={stat.id} className={styles.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={styles.label}>{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  )

    return (
      <>
        <section className={styles.statistics}>
        
          {h2}
        
          <ul className={styles.stat_list}>
            {items}
          </ul>

        </section>

      </>
    )   
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  
  stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
  }))
}