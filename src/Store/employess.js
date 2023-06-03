import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const employeeSlice = createSlice({
    name: "employess",
    initialState: [],
    reducers: {
        addEmployess: (state, action) => {
            state.push({
                id: ++id,
                name: action.payload.name
            })
        }
    }
})

console.log(employeeSlice);

export const { addEmployess } = employeeSlice.actions;

export default employeeSlice.reducer;