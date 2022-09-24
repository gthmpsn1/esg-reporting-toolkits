import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-logo"></div>
            <div className="nav-bar">
                    <li><NavLink to="/" className="nav-btn">Home</NavLink></li>
                    <li><NavLink to="/why-esg" className="nav-btn">Why ESG Reporting?</NavLink></li>
                    <li><NavLink to="/how" className="nav-btn">How?</NavLink></li>
                    <li><NavLink to="/learn-about-esg" className="nav-btn">Learn About ESG Reporting</NavLink></li>
                    <li><NavLink to="/report-creator" className="nav-btn">Report Creator</NavLink></li>
            </div>
        </div>
    )
}

export default connect()(Nav);