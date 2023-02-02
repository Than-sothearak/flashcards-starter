import { createSlice } from "@reduxjs/toolkit";
import { addQuizTopicId } from "../topics/topicsSlice.js";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: JSON.parse(localStorage.getItem('quizzes')) || {}
    },
    reducers: {
      addQuiz: (state, action)=> {
        const { id, name, topicId, cardIds } = action.payload;
        state.quizzes[id] = {
            id: id,
            name:  name,
            topicId: topicId,
            cardIds: cardIds,
        }
      },
    // addQuiz: (state, action) => {
    //     const {id} = action.payload;
    //     state.quizzes[id] = action.payload;
    //   },
    }
});

export const addQuizForTopicId = (payload) => {
    const { topicId, id } = payload;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(payload));
    dispatch(addQuizTopicId({
        topicId: topicId,
        quizId: id,
    }))
  }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;