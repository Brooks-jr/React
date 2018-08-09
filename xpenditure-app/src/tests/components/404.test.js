import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/404';

test('should render 404 component', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});