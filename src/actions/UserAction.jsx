export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function handleLogin() {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });

    //eslint-disable-next-line no-undef
    VK.Auth.login((req) => {
      if (req.session) {
        let username = req.session.user.first_name;

        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Failed authorization'),
        });
      }
    }, 4);
  };
}
