import { createSlice } from "@reduxjs/toolkit";


const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topic: JSON.parse(localStorage.getItem('topics')) || {}
    },
    reducers: {
        addTopic: (state, action) => {
        const { id, name, icon } = action.payload;
        state.topic[id] = {
            id: id,
            name: name,
            icon,
            quizIds: []
        }
        },
        
        addQuizTopicId: (state, action) => {
            const { quizId, topicId} = action.payload;
            state.topic[topicId].quizIds.push(quizId);
        },
    }
})
export const selectTopics = (state) => state.topics.topic;
export const { addTopic, addQuizTopicId } = topicsSlice.actions;
export default topicsSlice.reducer;