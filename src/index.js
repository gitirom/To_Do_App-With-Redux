import Store from "./store";
import { addTask, removeTask, completedTask } from "./action";

/*this function run everyTime when something changed in 
our Redux Store state. */

const unsubscribe = Store.subscribe(() => {
    console.log("Updated", Store.getState());
});

//Dispatching action from Store
Store.dispatch(addTask("Task 1"));
Store.dispatch(addTask("Task 2"));
console.log(Store.getState());

unsubscribe();
Store.dispatch(completedTask(2))

Store.dispatch(removeTask(1));
console.log(Store.getState());


console.log(Store.getState());
