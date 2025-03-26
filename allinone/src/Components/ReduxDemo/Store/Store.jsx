// import { Reducer } from "./Count/Reducer";
//     import { ThunkReducer } from "./Thunk/ThunkReducer";
//     import { applyMiddleware, combineReducers, createStore } from 'redux';
//     import {thunk} from 'redux-thunk'

//     const rootReducer = combineReducers({
//         count: Reducer,
//         getData: ThunkReducer,
//     })
//     const middleware1 = (store)=>(next)=>(action)=>{
//         console.log("Starting of middleware-1");
//         if(typeof action == "function"){
//             action(store.dispatch)
//         }
//         else{
//             next(action);
//         }
        
        
        
//         console.log("Endinging of middleware-1");
//     }
//     const middleware2 = (store)=>(next)=>(action)=>{
//         console.log("Starting of middleware-2");
//         next(action);
//         console.log("Endinging of middleware-2");
//     }
//     // export const Store = createStore(Reducer)
//     export const Store = createStore(rootReducer, applyMiddleware(thunk, middleware2))

// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { countReducer } from '../Reducer/countReducer';
import { dataReducer } from '../Reducer/dataReducer';

const rootReducer = combineReducers({
  count: countReducer,
  data: dataReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
