import { Fragment } from "react";
import {Routes, Route} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import WhyESG from "./WhyESG";
import How from "./How";
import LearnAbout from "./LearnAbout";
import ReportCreator from "./ReportCreator";
import Footer from "./Footer";

const App = () => {
  return (
      <Fragment> 
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
        <Footer />
      </Fragment>
  )
};
  
export default App;