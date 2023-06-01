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
    if(action.type === "ADD_TASK") {
        return [...state, 
            {
                id: ++id,
                task: action.payload.task,
                completed: false
            }
        ]
    }
    else if(action.type === "REMOVE_TASK"){
        return state.filter(task => task.id !== action.payload.id);
    }

    return state;
}





