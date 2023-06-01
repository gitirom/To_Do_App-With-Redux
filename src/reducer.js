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
import * as actionTypes from "./actionTypes";

let id = 0 ;

export default function reducer(state=[], action) {
    if(action.type === actionTypes.ADD_TASK) {
        return [...state, 
            {
                id: ++id,
                task: action.payload.task,
                completed: false
            }
        ];
        
    }
    else if(action.type === actionTypes.TASK_COMPLETED){
        return state.map(task => task.id === action.payload.id ? {
            ...task, completed: true
        } : task)
    }
    else if(action.type === actionTypes.REMOVE_TASK){
        return state.filter(task => task.id !== action.payload.id);
    }

    return state;
}





