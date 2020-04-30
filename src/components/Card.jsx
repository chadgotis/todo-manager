import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const ListCard = ({ text }) => {
  return (
    <div>
      <Card style={styles.card}>
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const styles = {
  card: {
    marginBottom: ".5rem",
  },
};

export default ListCard;
