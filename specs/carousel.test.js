import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import toJSON from 'enzyme-to-json';

import Carousel from '../client/component/carouselComponent/carousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

const shallow = Enzyme.shallow;
const mount = Enzyme.mount;

describe('Carousel', () => {
  let carousel;

  beforeEach(() => {
    carousel = shallow(<Carousel />)
  })

  // looks for tests 
  it('should run', () => {

  })
})