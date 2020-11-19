import 'jsdom-global/register'; //at the top of file , even  , before importing react

import App from '../src/components/app.jsx';
import ProductDetails from '../src/components/productDetails.jsx';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('App', () => {
  test('should render correctly in "debug" mode', async () => {
    const component = await shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('App9', () => {

  test('snapshot renders', () => {
    const component = TestRenderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the inner productDetails',  () => {
    //const wrapper = mount(<App />);
    const wrapper =  mount(<App debug />);

    expect(wrapper.find(ProductDetails).length).toEqual(1);

  });

  it('jhuguyguyguy guyguy', () => {
    const wrapper = mount(<App />);
    const bookWrapper = wrapper.find(ProductDetails);
    console.log(bookWrapper);

    //expect(bookWrapper.find({ 'pages': 435 })).to.have.lengthOf(1);
  });
});
