//import redux from 'redux';
//import reduxLogger from 'redux-logger';

const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
//const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

INITIAL_STATE_OF_CAKES = {
    numberOfcakes: 10
};

INITAL_STATE_OF_ICECREAMS = {
    numberOfIcecreams: 20
};


const cakeReducer = (state = INITIAL_STATE_OF_CAKES, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfcakes: state.numberOfcakes - 1
        };
        default: return state;
    }
};

const icecreamReducer = (state = INITAL_STATE_OF_ICECREAMS, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIcecreams: state.numberOfIcecreams - 1
        };
        default: return state
    }
};

const buyIcecreams = () => ({
    type: BUY_ICECREAM,
    payload: 'Buying icecreams'
});

const buyCake = () => {
    return {
        type: BUY_CAKE,
        payload: 'Buying cake'
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
});

const store = createStore(rootReducer);
console.log('Inital state ', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
unsubscribe();
