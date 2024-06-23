export const login = (credentials) => (dispatch) => {

  setTimeout(() => {
    //  example
    if (credentials.username === 'user' && credentials.password === '1234') {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { username: 'user' }  
      });
    } else {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: 'Invalid credentials'
      });
    }
  }, 1000); 
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};
