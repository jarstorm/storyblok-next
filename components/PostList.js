import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import Post from "./Post";

const PostList = ({ blok, fetchData, posts }) => {      
  
  useEffect(() => {    
    fetchData();
   }, []);

  return (
    <div className="mt-20 mb-20">
      <span className="text-blue-800 block mb-10 text-lg">List of posts. This comes from "our backend"</span>    
      <div className="flex flex-row flex-wrap" {...storyblokEditable(blok)}>        
          {posts.map(p => <Post key={p.id} {...p} />)}        
      </div>
    </div>
  );
};

function mapStateToProps({posts}) {  
  return { posts};
}

export default connect(mapStateToProps, actions)(PostList);
