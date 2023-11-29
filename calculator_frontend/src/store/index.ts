import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { calculatorReducer } from './calculatorReducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    // ... other reducers
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
