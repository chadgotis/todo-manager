const initialState = [
  {
    id: 1,
    title: "Sample title 1",
    cards: [
      {
        id: 1,
        text: "Sample Text 1",
      },
      {
        id: 2,
        text: "Sample Text 2",
      },
    ],
  },
  {
    id: 2,
    title: "Sample title 2",
    cards: [
      {
        id: 3,
        text: "Sample Text 3",
      },
    ],
  },
  {
    id: 3,
    title: "Sample title 3",
    cards: [
      {
        id: 4,
        text: "Sample Text 4",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
