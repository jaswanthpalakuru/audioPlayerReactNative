const initialState = { assets: [], currentPlaying: "" };
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ASSET":
      return {
        ...state,
        assets: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
