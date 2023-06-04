
import Store from "./Store/ConfigureStore";
import { fetchTask, getTasks } from "./Store/tasks";
import axios from "axios";

// const gettingTasks = async() => {
//     try {
//         // calling api
//         const response = await axios.get("http://localhost:5000/api/tasks");
//         console.log(response);
//         // dispatch action
//         Store.dispatch(getTasks({ tasks: response.data }))
//     } catch (error) {
//         Store.dispatch({ type: "SHOW_ERROR", payload: {error: error.message} })
//     }
// }

// gettingTasks();

Store.dispatch(fetchTask( ))

