import "./statistics.module.css";

const Statistics = ({title, stats}) => {
    
    const h2 = title ? <h2 className="title">{title}</h2> : "";

    const item = stats.map(stat =>
    <li className="item">
      <span className="label">{stat.label}</span>
      <span className="percentage"> - {stat.percentage}%</span>
    </li>
  )

  return (
<>
<section className="statistics">
  {h2}

  <ul className="stat-list">
   {item}
  </ul>
  
</section>
</>
)
}

export default Statistics;