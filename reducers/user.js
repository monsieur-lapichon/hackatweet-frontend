import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const userSlice = createSlice({
 name: 'user',

  initialState,
 reducers: {
   addFriendToStore: (state, action) => {
     state.value.push(action.payload);
   },
 },
});

export const { addFriendToStore } = friendsSlice.actions;
export default friendsSlice.reducer;