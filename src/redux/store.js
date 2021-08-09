import { createStore } from "redux";
import { reducer } from "./reducer";

export let store = createStore(reducer);

// - The Store in Redux is the object that brings actions and reducers together

// - The store holds the application state data and handles all state updates

// - The store handles state updates by passing the current state and an action through a reducer

// - The store has a dispatch method that takes actions as an argument when an action is dispatched through the store, the action is sent through the reducers and the state is updated
