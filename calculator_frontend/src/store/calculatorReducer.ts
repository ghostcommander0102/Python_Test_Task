import { CALCULATE_SUCCESS, CALCULATE_FAILURE } from './calculatorActions';

const initialState = {
    result: '',
    color: 'black',
    error: false,
};

export const calculatorReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CALCULATE_SUCCESS:
            return {
                ...state,
                result: action.payload.result,
                color: action.payload.color,
                error: false,
            };
        case CALCULATE_FAILURE:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};
