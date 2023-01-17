import { CREATE_RATING, CHANGE_RATING, LOAD_RATINGS } from "./types";
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case LOAD_RATINGS:
      return { ...state, movies: action.payload };
    case CREATE_RATING:
      return { ...state, movies: [action.payload, ...state.movies] };
    case CHANGE_RATING:
      return {
        ...state,
        movies: state.movies.map((item) =>
          item.id === action.payload.id
            ? { ...item, score: action.payload.score }
            : item
        ),
      };
    default:
      return state;
  }
};
