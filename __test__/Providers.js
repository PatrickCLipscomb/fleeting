import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import ProviderOption from '../src/components/ProviderOption'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

import air from '../src/images/air.svg'

// import {addInputs,subtractInputs} from '../src/js/actions/calculatorActions'
import {createStore} from 'redux'
// import calculatorReducers from '../src/js/reducers/calculatorReducers'

// Snapshot for ProviderOption React Component
// describe('>>>H O M E --- Snapshot',()=>{
//     it('+++capturing Snapshot of ProviderOption', () => {
//         const renderedValue =  renderer.create(<ProviderOption icon={air} optionTitle={'Air'} />).toJSON()
//         expect(renderedValue).toMatchSnapshot();
//     });
//
// });

// *********************************
describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper
     const output = 10

    beforeEach(()=>{
        wrapper = shallow(<ProviderOption icon={air} optionTitle={'Air'} />)

    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('+++ contains output', () => {
        expect(wrapper.find('h3').text()).toEqual('Air')
    });

});
