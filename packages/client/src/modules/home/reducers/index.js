const defaultState = {
  cachedProducts: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'CACHE_DATA': {
      return Object.assign({}, state, {
        cachedProducts: action.data
      });
    }
    default:
      return state;
  }
}
