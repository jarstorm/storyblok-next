import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';


const FilterProjectsButtons = ({name, content, fetchDataStoryblok}) => {            

  const [filter, setFilter] = useState("all");

  useEffect(() => {    
    fetchDataStoryblok(filter);
   }, [filter]);

  return (
        <div className="flex flex-row">            
            <button className="bg-gray-400 rounded-xl p-6 flex items-center justify-center m-10 cursor-pointer" 
              onClick={() => setFilter("all")}>All</button>
            <button className="bg-gray-400 rounded-xl p-6 flex items-center justify-center m-10 cursor-pointer" 
              onClick={() => setFilter("cardano")}>Only Cardano</button>
            <button className="bg-gray-400 rounded-xl p-6 flex items-center justify-center m-10 cursor-pointer" 
              onClick={() => setFilter("ethereum")}>Only Ethereum</button>
        </div>
  );
};

function mapStateToProps({}) {      
    return { };
  }
  
  export default connect(mapStateToProps, actions)(FilterProjectsButtons);

