import Store from "./store";
import { addTask, removeTask } from "./action";

//Dispatching action from Store
Store.dispatch(addTask("Task 1"));
console.log(Store.getState());
Store.dispatch(removeTask(1));
console.log(Store.getState());
