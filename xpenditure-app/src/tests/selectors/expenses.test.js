import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'Candy',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Drink',
    note: '',
    amount: 395,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Chips',
    note: '',
    amount: 295,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

// TEXT FILTER TEST
test('should filter by text value', () => {
    const filters = {
        text: 'i',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

// START DATE FILTER TEST
test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

// END DATE FILTER TEST
test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});