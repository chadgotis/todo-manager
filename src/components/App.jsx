import React from "react";
import "../css/App.scss";
import List from "./List";
import { connect } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
// import { add, subtract } from "./actions";
// const counter = useSelector((state) => state.counter);
// const dispatch = useDispatch();
// return (
//   <div>
//     <h1>Counter {counter}</h1>
//     <button onClick={() => dispatch(add())}>+</button>
//     <button onClick={() => dispatch(subtract())}>-</button>
//   </div>
// );

function App(props) {
  const lists = props;
  return (
    <div style={styles.app}>
      <h1>Todo Manager</h1>
      <div style={styles.listContainer}>
        {lists.lists.map((list) => (
          <List key={list.id} title={list.title} cards={list.cards} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  app: {
    maxWidth: "1366px",
    padding: "1rem",
    margin: "auto",
  },
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(App);
