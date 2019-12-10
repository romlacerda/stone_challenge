import { combineReducers } from 'redux';
const initialState = {
    facts: [],
    searching: false
}

const factReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FACT':
            const { facts, searching } = state;
            
            const factList = action.payload;

            const isSearching = true;

            const newState = { factList, isSearching }
            return newState;
        default:
            return state;
        
    }
}

export default combineReducers({
    facts: factReducer,
})