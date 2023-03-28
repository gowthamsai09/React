// for react application we use ES6 import.
// import redux from 'redux'

// for node js application.
const redux = require('redux')
//Redux logger
const reduxLogger = require('redux-logger')
// creating store
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()

//Action
const BUY = 'BUY_CAKE'
const ORDER = 'Order'

//Action creater
function buyCake(){
    return{
        type: BUY,
        info: 'First redux action'
    }
}
function Order(){
    return{
        type: ORDER,
        info: 'First redux action'
    }
}

// reducer
//(previousState, action) => newState
const buyCakeState={
    numofCakes: 100,
}
const OrderState={
    numoforder: 0
}
//reducer function
// const Reducer =(state = initialState, action) =>{
//     switch(action.type){
//         case BUY, ORDER:return{
//             ...state, // If there are more than one property. It basically copies the entire properties and only changes the property that we need to update.
//             numofCakes: state.numofCakes -1,
//             numoforder: state.numoforder +1
             
//         }
//         // case ORDER:return{
           
//         // }
//         default: return state
//     }
// }

const CakeReducer =(state = buyCakeState, action) =>{
    switch(action.type){
        case BUY:return{
            ...state,
            numofCakes: state.numofCakes -1,  
        }
        default: return state
    }
}
const OrderReducer =(state = OrderState, action) =>{
    switch(action.type){
        case ORDER:return{
            ...state,
            numoforder: state.numoforder +1  
        }
        default: return state
    }
}


// combining muliple reducers.
const rootReducer = combineReducers({
    cake: CakeReducer,
    order: OrderReducer
})
// store to hold redux 
// creating redux store.
// for passing middlewae. we can pass as many as middlewares as application required.
const store = createStore(rootReducer, applyMiddleware(logger))
// after creating we are going to check the initial state.
console.log('Initial State', store.getState())
// when ever the store is getting updated we will log into the console to know the state.
// const unsubscribe =  store.subscribe(() => console.log('Updated state', store.getState()))
const unsubscribe =  store.subscribe(() => {})
// It go and check the reducer and check the switch statement. in this example Buy is the switch statement so it reduce the no.of.cakes by 1 and get updated.
store.dispatch(buyCake())
// same happen to the next dispatch.
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(Order())
store.dispatch(Order())
// unsubscribe the store.
unsubscribe()