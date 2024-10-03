import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    viewcode: 'exam'
};
const viewSlice = createSlice({
    name: 'viewController',
    initialState,
    reducers: {
        changeView: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.viewcode= action.payload;
        },
        default: state => state
    }
})

export const {changeView} = viewSlice.actions;
export default viewSlice.reducer;