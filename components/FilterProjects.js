import { storyblokEditable } from "@storyblok/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import FilterProjectsButtons from "./FilterProjectsButtons";
import Project from "./Project";

const FilterProjects = ({blok, filteredProjects}) => {                
       
       return (
        <div>
            <span className="block mt-20 mb-20">This data comes from Storyblok. I use a REST query to get the data</span>
        <FilterProjectsButtons />        
        <div className="flex flex-row justify-center align-center" {...storyblokEditable(blok)}>            
            {filteredProjects.map(p => <Project key={p.id} {...p} />)}        
        </div>
        </div>
  ); 
};

function mapStateToProps({filteredProjects}) {      
    return { filteredProjects};
  }
  
  export default connect(mapStateToProps, actions)(FilterProjects);

  
