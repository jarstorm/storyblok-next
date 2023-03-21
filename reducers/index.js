import { HYDRATE } from "next-redux-wrapper";

export const reducer = (
  state = { app: "init", page: "init", posts:[], filteredProjects: [], postDetail:{}, user: null },
  action
) => {        
  switch (action.type) {
    case HYDRATE:      
      if (action.payload.app === "init") delete action.payload.app;
      if (action.payload.page === "init") delete action.payload.page;
      return { ...state, ...action.payload };
    case "FETCH":
      return { ...state, posts: action.payload };    
    case "FETCH_POST":
      return { ...state, postDetail: action.payload };    
    case "FETCH_STORYBLOK":
      return { ...state, filteredProjects: action.payload };    
    case "LOGIN":
      return {...state, user: action.payload}
    case "LOGOUT":
      return {...state, user: null}
    default:
      return state;
  }
};
