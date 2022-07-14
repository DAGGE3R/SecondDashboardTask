export const TopChartComponent = () => {
  const getHeight = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1));
  };

  const n = 9;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        transform: "rotate(180deg)",
        marginLeft: "5vw",
        marginBottom: "10px",
      }}
      className="chart-Container"
    >
      {[...Array(n)].map((e, index) => (
        <div
          className="testing"
          key={index}
          style={{
            width: ".4vw",
            borderRadius: "5px",
            backgroundColor: "white",
            marginLeft: "2.7vw",
            height: `${getHeight(1, 7.5)}vw`,
          }}
        />
      ))}
    </div>
  );
};
