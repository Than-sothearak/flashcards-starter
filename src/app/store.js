import { configureStore } from "@reduxjs/toolkit";
import  topicsReducer  from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import cardReducer from "../features/cards/cardSlice";
export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardReducer,
  },
});
