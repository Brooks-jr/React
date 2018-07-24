import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});





// REDUCERS
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {

        // INCREASE
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        // DECREASE
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        // SET
        case 'SET':
            return {
                count: action.count
            };

        // RESET
        case 'RESET':
            return {
                count: 0
            };

        // DEFAULT    
        default:
            return state;
    }
};

const store = createStore(countReducer);





const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 4 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 7 }));

store.dispatch(setCount({ count: 88 }));