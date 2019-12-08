import { combineReducers } from 'redux';
const initialState = {
    tags: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    tags: reducer
})