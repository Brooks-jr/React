import { createStore, combineReducers } from 'redux';


// EXPENSE REDUCER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


// FILTER REDUCER
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
        return state;
    }
};


// STORE
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'odijdhjhbsj',
        description: 'car note',
        note: 'Car payment for june',
        amount: 70000,
        createdAt: 0
    }],
    filters: {
        text: 'car',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
};