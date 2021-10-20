import {combineReducers, createStore} from 'redux';
import spiritStatsReducer from "./reducers/spiritStatsReducer";

export interface IReduxStore {
    spiritStats: any;
}

const reducers: IReduxStore = {
    spiritStats: spiritStatsReducer,
};
const reduxStore = createStore(
    combineReducers(reducers)
);

export default reduxStore;
