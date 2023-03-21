import axios from 'axios';
import { STORYBLOK_SERVER_URL } from '../config';

export const fetchDataStoryblok = (filter) => async (dispatch) => {      
      let url = `${STORYBLOK_SERVER_URL}`;      
      if (filter !== "all") {
            url += `&filter_query[type][in]=${filter}`;
      }      
      const {data} = await axios.get(url);            
      dispatch({ type: "FETCH_STORYBLOK", payload: data.stories });
};
