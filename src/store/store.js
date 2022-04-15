import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {headerStore} from "../components/header/header.store";
import {statisticStore} from "../pages/statistic/statistic.store";


const combine = combineReducers({
    headerStore: headerStore,
    statisticStore: statisticStore
})

export const store = createStore(combine, applyMiddleware(thunk))
window.store = store
store.subscribe(() => {
    localStorage['headerStore'] = JSON.stringify(store.getState().headerStore)
})