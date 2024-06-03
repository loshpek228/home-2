import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    num: 0,
    text: "Hello world",
};

export const incrementNum = createAction('INCREMENT_NUM');
export const decrementNum = createAction('DECREMENT_NUM');
export const resetNum = createAction('RESET_NUM');
export const setText = createAction('SET_TEXT');
export const fiveNum = createAction('FIVE_NUM');
export const minusNum = createAction('MINUS_NUM');

export default createReducer(initialState, (builder) => {
    builder
        .addCase(incrementNum, (state) => {
            state.num = Math.min(state.num + 1, 20);
        })
        .addCase(decrementNum, (state) => {
            state.num = Math.max(state.num - 1, 0);
        })
        .addCase(resetNum, (state) => {
            state.num = 0;
        })
        .addCase(setText, (state, action) => {
            state.text = action.payload;
        })
        .addCase(fiveNum, (state) => {
            state.num = Math.min(state.num + 5, 20);
        })
        .addCase(minusNum, (state) => {
            state.num = Math.max(state.num - 5, 0);
        });
});
