export default (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.payload;

    default:
      return state;
  }
};
