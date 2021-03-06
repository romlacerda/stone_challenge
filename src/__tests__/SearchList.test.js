
import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { SearchList } from '../components/SearchList';
import Past from '../components/Past';

const mockStore = configureStore();
const initialState = {
    searchs: [{
        searchs: ['star wars', 'the batman', 'hal jordan'],
    }],
    testo: 'teste',
};

const store = mockStore(initialState);

describe('Testing', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <SearchList searchs={initialState} />,
            { context: { store } },
        ).debug();

        expect(wrapper).toMatchSnapshot();
    });
});
