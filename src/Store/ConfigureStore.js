
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import employeeReducer from './employess';
import taskReducer from './tasks';
import log from '../middleware/log';

//Creating a Redux Store with ReduxToolkit

const Store = configureStore({reducer : {
    employees : employeeReducer,
    tasks : taskReducer
},
    middleware : (getDefaultMiddleware) => [...getDefaultMiddleware(), log],
});






export default Store;

/*Creating a Redux Store ****
const Store = configureStore(
    reducer,
    devToolsEnhancer({ trace: true })  // this function gone connect our app with Redux tools.
    );
*/

