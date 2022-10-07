import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-logo"></div>
            <div className="nav-bar">
                <NavLink to={"/"}  activeClassName="active" className="nav-btn" end>Home</NavLink>
                <NavLink to={"why-esg"} activeClassName="active" className="nav-btn">Why ESG Reporting?</NavLink>
                <NavLink to={"how"} activeClassName="active" className="nav-btn">How?</NavLink>
                <NavLink to={"learn-about-esg"} activeClassName="active" className="nav-btn">Learn About ESG Reporting</NavLink>
                <NavLink to={"report-creator"} activeClassName="active" className="nav-btn">Report Creator</NavLink>
            </div>
        </div>
    )
}

export default Nav;