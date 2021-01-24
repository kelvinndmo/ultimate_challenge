import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  const AppComponent = shallow(<App />);
  it('should render app component', () => {
    expect(AppComponent).toMatchSnapshot();
  });
});
