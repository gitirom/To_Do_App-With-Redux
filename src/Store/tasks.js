import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let id = 0 ;

const initialState = {
    tasks: [],
    loading: false,
    error: null
}


// Fetching data using createAsyncThunk() function they have pending property take loading, fullfiled take work part, rejected take the error using withrejectedValue()  

export  const fetchTask =  createAsyncThunk("fetchTasks", async(a,{rejectWithValue}) => {
    try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        return { tasks: response.data }
    } catch (error) {
        return rejectWithValue({error: error.message})
    }
    
});

// create an action and reducer, which single method, which is Create Slice. 
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        //action: function
        getTasks: (state, action) => {
            state.tasks = action.payload.tasks
        },
        addTask: (state, action) => {
            state.tasks.push({
                id: ++id,
                task: action.payload.task,
                completed: false
        })
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            state.splice(index, 1) //remove the id-task from the index 
        },
        completedTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            state.tasks[index].completed = true;
        }
    },
    extraReducers: {  //this reducer but can using createAsyncThink 
        [fetchTask.pending]: (state, action) => {
            state.loading = true
        },
        [fetchTask.fulfilled]: (state, action) => {
            state.tasks = action.payload.tasks
            state.loading = false
        },
        [fetchTask.rejected]: (state, action) => {
            state.error = action.payload.error
            state.loading = false
        }
    }
})

console.log(taskSlice);

export const { getTasks, addTask, removeTask, completedTask } = taskSlice.actions;

export default taskSlice.reducer;



