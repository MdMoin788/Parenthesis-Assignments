const initState = {
    single: {}
};
export const dataStoreReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case "singleData":
            return {...state, single : payload};
        default:
            return state;
    }
};