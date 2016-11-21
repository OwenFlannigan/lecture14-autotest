import React from 'react';
import { shallow } from 'enzyme';
import App, { DogList, DogCard } from './PetApp';

import AdoptPage from './AdoptDog';

//tests go here!
describe('Basic math and logic', () => {
    // Description followed by testing function

});

describe('<App> component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);

    });
});

describe('<DogList> component', () => {

    var wrapper;

    beforeEach(() => {
        wrapper = shallow(<DogList />);
    });

    it('has the correct title', () => {
        const wrapper = shallow(<DogList />);
        expect(wrapper.find('h2').text()).toEqual("Dogs for Adoption");
    });

    it('has 5 <DogCard> components', () => {
        const wrapper = shallow(<DogList />);
        expect(wrapper.find('DogCard').length).toEqual(5);
    });

});

describe('<AdoptPage> component', () => {
    it('should adopt a dog on click', () => {
        const wrapper = shallow(<AdoptPage params={{ dogName: 'Fido' }} />);
        var button = wrapper.find('button');
        button.simulate('click');
        expect(wrapper.find('button').text()).toEqual('Already adopted!');
    });
});