
import Store from "./Store/ConfigureStore";
import { addTask, removeTask, completedTask } from "./Store/tasks";
import {addEmployess} from "./Store/employess";

/*this function run everyTime when something changed in 
our Redux Store state. */

// const unsubscribe = Store.subscribe(() => {
//     console.log("Updated", Store.getState());
// });

// //Dispatching action from Store
// Store.dispatch(addTask({task: "Task 1"}));
// Store.dispatch(addTask({task: "Task 2"}));
// console.log(Store.getState());

// unsubscribe();
// Store.dispatch(completedTask({id: 2}));

// Store.dispatch(removeTask({id: 1}));
// console.log(Store.getState());


// console.log(Store.getState());

// Store.dispatch(addEmployess({name: "Mouhamed"}));
Store.dispatch({ type: "SHOW_ERROR", payload: {error: "User Not Found"} })


