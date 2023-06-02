
import { configureStore } from '@reduxjs/toolkit';
import reducer from './tasks';

//Creating a Redux Store with ReduxToolkit

const Store = configureStore({reducer});






export default Store;

/*Creating a Redux Store ****
const Store = configureStore(
    reducer,
    devToolsEnhancer({ trace: true })  // this function gone connect our app with Redux tools.
    );
*/

