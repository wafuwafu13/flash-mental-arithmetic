import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import HomeTitle from '../elements/HomeTitle'

configure({ adapter: new Adapter() });

it('Should render HomeTitle', () => {
    const component = shallow(<HomeTitle />)
    const wrapper = component.find(`[data-test='homeTitle']`)
    expect(wrapper.length).toBe(1)
})

