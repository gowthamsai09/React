// for react application we use ES6 import.
// import redux from 'redux'

// for node js application.
const redux = require('redux')
// creating store
const createStore = redux.createStore

//Action
const BUY = 'BUY_CAKE'
function buyCake(){
    return{
        type: BUY,
        info: 'First redux action'
    }
}

// reducer
//(previousState, action) => newState
const initialState={
    numofCakes: 100
}
//reducer function
const Reducer =(state = initialState, action) =>{
    switch(action.type){
        case BUY:return{
            ...state, // If there are more than one property. It basically copies the entire properties and only changes the property that we need to update.
            numofCakes: state.numofCakes -1
        }
        default: return state
    }
}

// store to hold redux 
// creating redux store.
const store = createStore(Reducer)
// after creating we are going to check the initial state.
console.log('Initial State', store.getState())
// when ever the store is getting updated we will log into the console to know the state.
const unsubscribe =  store.subscribe(() => console.log('Updated state', store.getState()))
// it go and check the reducer and check the switch statement. in this example Buy is the switch statement so it reduce the no.of.cakes by 1 and get updated.
store.dispatch(buyCake())
// same happen to the next dispatch.
store.dispatch(buyCake())
store.dispatch(buyCake())
// unsubscribe the store.
unsubscribe()