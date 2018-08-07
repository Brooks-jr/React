import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

// TEXT FILTER TEST
test('should generate set text filter action object with text value', () => {
    const text = 'text value in'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter action object with default value', () => {
    const text = ''
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

// SORT BY DATE TEST
test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

// SORT BY AMOUNT TEST
test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// SET START DATE TEST
test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

// SET END DATE TEST
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

