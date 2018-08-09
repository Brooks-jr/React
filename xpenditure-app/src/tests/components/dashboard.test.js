
import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/dashboard';

test('should render DashboardPage component', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});