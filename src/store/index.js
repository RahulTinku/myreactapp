// import { legacy_createStore as createStore } from 'redux';

// const reducerFn = (state = { counter: 0 }, action) => {
//   if (action.type === 'INCREMENT') {
//     return { counter: state.counter + action.payload || 0 };
//   } else if (action.type === 'DECREMENT') {
//     return { counter: state.counter - action.payload };
//   }

//   return state;
// };

// const store = createStore(reducerFn);

// export default store;

import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
