import { legacy_createStore as createStore} from 'redux';
import reducer from './reducer';

const Store = createStore(reducer);


export default Store;