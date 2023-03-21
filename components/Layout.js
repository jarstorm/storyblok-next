import Login from "../pages/login";
import Footer from "./Footer";
import Menu from "./Menu";
import { connect } from "react-redux";
import * as actions from '../actions';

const Layout = ({children, user}) => {
  if (!user) {
    return <Login />
  }
    return (
          <div className={"bg-cs-yellow flex flex-row"}>
            <Menu />
                <div className="h-auto w-full mt-5">
                    {children}
                    <Footer />
                </div>
          </div>
    );
  };

function mapStateToProps({user}) {  
  return { user};
}

export default connect(mapStateToProps, actions)(Layout);
