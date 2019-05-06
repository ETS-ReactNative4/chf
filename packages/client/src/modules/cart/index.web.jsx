import reducers from './reducers';
import Feature from '../connector';

export default new Feature({
  reducer: { cart: reducers }
});
