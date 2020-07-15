import React from 'react';
import HomeTitle from '../elements/HomeTitle'
import renderer from 'react-test-renderer';


it('renders correctly with defaults', () => {
  const button = renderer
    .create(<HomeTitle />)
    .toJSON();
  expect(button).toMatchSnapshot();
});