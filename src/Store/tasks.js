import { createAction } from "@reduxjs/toolkit";


//Actions with Redux Toolkit 
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completedTask = createAction("TASK_COMPLETED");

console.log(addTask.type);


// export const addTask = (task) => {
//     return {type: ADD_TASK, payload: { task: task } };
// };

// export const removeTask = (id) => {
//     return {type: REMOVE_TASK, payload: { id: id } };
// };

// export const completedTask = (id) => {
//     return {type: TASK_COMPLETED, payload: { id: id } };
// };

//Reducer

/*this our action object 
    {
        type: 'ADD_TASK',
        payload: {
            id: 1,
            task; "This is new task",
            completed: false
        }
    }

*/

//creating a reducer function 


let id = 0 ;

export default function reducer(state=[], action) {
    if(action.type === addTask.type) {
        return [...state, 
            {
                id: ++id,
                task: action.payload.task,
                completed: false
            }
        ];
        
    }
    else if(action.type === completedTask.type){
        return state.map(task => task.id === action.payload.id ? {
            ...task, completed: true
        } : task)
    }
    else if(action.type === removeTask.type){
        return state.filter(task => task.id !== action.payload.id);
    }

    return state;
}


