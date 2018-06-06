import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import VueComponent from '../../build/vue-component-seed.js';

const factory = (values = {}) => {
  return shallowMount(VueComponent, {
    propsData: { ...values }
  });
};

describe('vue-component-seed', () => {
  it('renders the message', () => {
    const wrapper = factory({
      msg: 'Hello!'
    });
    expect(wrapper.find('.msgClass').text()).equal('Hello!');
  });

  /**
   * Nexts tests
   */
});
