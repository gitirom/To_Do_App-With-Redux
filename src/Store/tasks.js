import { createSlice } from "@reduxjs/toolkit";

let id = 0 ;

// create an action and reducer, which single method, which is Create Slice. 
const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        //action: function
        addTask: (state, action) => {
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false
        })
        },
        removeTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id)
            state.splice(index, 1) //remove the id-task from the index 
        },
        completedTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id)
            state[index].completed = true;
        }
    }
})

console.log(taskSlice);

export const { addTask, removeTask, completedTask } = taskSlice.actions;

export default taskSlice.reducer;



