import styles from"./statistics.module.css";

const Statistics = ({title, stats}) => {
    
    const h2 = title ? <h2 className={styles.title}>{title}</h2> : "";

    const items = stats.map(stat =>
    <li  key={stats.id} className={styles.item} data-action="bg-color">
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

