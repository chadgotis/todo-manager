import React from "react";
import Card from "./Card";

const List = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.header}>{title}</h3>
      {cards.map((card) => (
        <Card key={card.id} text={card.text} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "250px",
    background: "#dadada",
    padding: "1rem",
    borderRadius: "12px",
    margin: ".5rem",
    marginBottom: "1rem",
  },
  header: {
    textAlign: "center",
    marginBottom: ".5rem",
  },
};
export default List;
