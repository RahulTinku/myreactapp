import { legacy_createStore as createStore } from 'redux';

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + action.payload || 0 };
  } else if (action.type === 'DECREMENT') {
    return { counter: state.counter - action.payload };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
