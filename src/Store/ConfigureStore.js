import { legacy_createStore as createStore} from 'redux';
import reducer from './tasks';


//Creating a Redux Store 
const Store = createStore(reducer);


export default Store;