export const addFact = factObject => (
    {
        type: 'ADD_FACT',
        payload: factObject,
    }
);

export const searchFact = searchObject => (
    {
        type: 'ADD_SEARCH',
        payload: searchObject
    }
);