export const initialState = {
  user: {
    name: 'Alexey',
    surname: 'Ogorodnikov',
    age: 31,
  },
};

export function rootReducer(state = initialState) {
  return state;
}
