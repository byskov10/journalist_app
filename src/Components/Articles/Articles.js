const Articles = ({ seriesData }) => {
    return (
      <div>
        {seriesData.map((series, i) => (
          <div key={i}>
            <h4>{series.name}</h4>
            <ul>
              {series.data.map((dataPoint, j) => (
                <li key={j}>
                  <span style={{ color: series.color }}>{series.name}:</span> {dataPoint[1]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default Articles;
  