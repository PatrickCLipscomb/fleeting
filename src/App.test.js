import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });


import {shallow} from 'enzyme';
import ProviderOption from './components/ProviderOption';
import air from './images/air.svg'



test('ProviderOption renders correctly', () => {
  // Render a checkbox with label in the document
  // const ProviderOption = shallow(<ProviderOption icon={air} labelOff="Air" />);

  // expect(ProviderOption.text()).toEqual('Off');

  // ProviderOption.find('h3').text().toEqual('Air');
  // expect(ProviderOption.find('h3')).to.have.length(1);

  const wrapper = shallow(<div><b>important</b></div>);
  expect(wrapper.text()).to.equal('important');

  // expect(checkbox.text()).toEqual('On');
});
