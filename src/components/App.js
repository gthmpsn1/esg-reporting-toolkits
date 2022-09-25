import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {handleInitialData} from "../actions/shared";
import LoadingBar from "react-redux-loading-bar"
import {Routes, Route} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import WhyESG from "./WhyESG";
import How from "./How";
import LearnAbout from "./LearnAbout";
import ReportCreator from "./ReportCreator";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
      <Fragment>
        <LoadingBar /> 
        <div className="app-container">
        <Nav />
          <Routes> 
            <Route exact path={"/"} element={<Home />} />
            <Route path={"/why-esg"} element={<WhyESG />} />
            <Route path={"/how"} element={<How />} />
            <Route path={"/learn-about-esg"} element={<LearnAbout />} />
            <Route path={"/report-creator"} element={<ReportCreator />} />
          </Routes>
        </div>
      </Fragment>
  )
};
  
export default connect()(App);