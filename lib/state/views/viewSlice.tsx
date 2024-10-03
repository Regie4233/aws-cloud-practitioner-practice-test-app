import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = ['home', 'exam', 'result'];
const viewSlice = createSlice({
    name: 'viewController',
    initialState,
    reducers: {
        changeView: (state, action: PayloadAction<string>) => {

        }
    }
})

export const {changeView} = viewSlice.actions;
export default viewSlice.reducer;