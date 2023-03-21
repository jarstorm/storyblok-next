import { connect } from "react-redux";
import * as actions from '../actions';
import { useRouter } from "next/router";


const Login = ({loginUser}) => {
    
    const router = useRouter();


    const login = async () => {
        await loginUser();
        router.push("/")
    }

    return (
        <div className="flex justify-center items-center flex-col mt-40">
          <span className="block mb-10">Login page</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={login}>Login</button>
        </div>
      );
}

function mapStateToProps() {  
    return { };
  }

  export default connect(mapStateToProps, actions)(Login);
  