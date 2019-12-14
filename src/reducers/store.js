import { combineReducers } from 'redux';
const initialState = {
    facts: [],
    searching: false,
    searchs: []
}

const factReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FACT':
            const { facts, searching, searchs } = state;
            
            const factList = action.payload;

            const isSearching = true;

            const newState = { factList, isSearching, searchs }
            return newState;
        default:
            return state;
        
    }
}


const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_SEARCH':
            const { facts, searching, searchs } = state;
            const value = action.payload;
            let newState = { facts, searching, searchs };
            newState.searchs.push(value);
            return newState;
        default:
            return state;
    }
}

export default combineReducers({
    facts: factReducer,
    searchs: searchReducer
})