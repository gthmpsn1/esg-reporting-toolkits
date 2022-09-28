import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <div className="contents">
                <h1 className="heading">ESG Reporting Toolkits for Municpal Governments</h1>
                <p className="tagline">Where municipal debt issuers create robust, evidence based ESG reports from free, reliable data sources.</p>
                <div className="btn-container">
                    <Link to={"report-creator"} className="button ready-btn">Create Report</Link>
                    <Link to={"why-esg"} className="button more-btn">Learn More</Link>
                </div>
            </div>
            <div className="home-image"></div>
        </div>
    )
}

export default connect()(Home);