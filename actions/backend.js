import axios from 'axios';
import { SERVER_URL } from '../config';

export const fetchData = () => async (dispatch) => {      
      const url = `${SERVER_URL}/posts`;
      let {data} = await axios.get(url);
      dispatch({ type: "FETCH", payload: data });
};

export const fetchPost = id => async (dispatch) => {
      const url = `${SERVER_URL}/posts/${id}`;
      let {data} = await axios.get(url);
      dispatch({ type: "FETCH_POST", payload: data });
}

export const loginUser = () => async (dispatch) => {      
      dispatch({ type: "LOGIN", payload: {username: "test"} });
}

export const logoutUser = () => async (dispatch) => {
      dispatch({ type: "LOGOUT"});
}