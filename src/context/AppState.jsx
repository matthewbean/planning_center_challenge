import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import AppContext from "./appContext";
import appReducer from "./AppReducer";
import {CREATE_RATING, CHANGE_RATING} from "./types";

const AppState = (props) => {
  const initialState = {
    movies: [{
      name: "Death Becomes Her",
      category:'Comedy',
      score:3,
      id:uuidv4()
    },
    {
      name: 'Ghostbusters',
      category: 'Comedy',
      score:5,
      id:uuidv4()
    },
    {
      name:"Harry Potter - Sorcerer Stone",
      category: 'Drama',
      score:4,
      id:uuidv4()
    },
    {
      name:'Jurassic Park',
      category: 'Action/Adventure',
      score: 4,
      id:uuidv4()
    },
    {
      name:'The Sandlot',
      category: 'Comedy',
      score:4,
      id:uuidv4()
    }
  ],
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  //create rating
  const createRating=(item)=>{
    dispatch({type:CREATE_RATING, payload:{...item, id:uuidv4()}})
  }
  //change rating
  const changeRating=(e, score, id)=>{
    dispatch({type:CHANGE_RATING, payload:{id,score}})
  }

  //set app
  return (
    <AppContext.Provider
      value={{
        movies: state.movies,
        changeRating,
        createRating
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
