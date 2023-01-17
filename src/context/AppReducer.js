import { CREATE_RATING, CHANGE_RATING } from "./types";
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case CREATE_RATING:
      return { ...state, movies: [...state.movies, action.payload] };
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
