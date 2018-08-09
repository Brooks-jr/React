import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/expense-list';
import expenses from '../fixtures/expenses';

test('should render expense list with given expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list message when no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});