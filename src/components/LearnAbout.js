import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

const LearnAbout = () => {
    return (
        <div className="learn-about-container">
            <h1>Learn About ESG Reporting</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Environmental</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h6>Demand for environmental risk reporting is soaring</h6>
                        </div>
                        <div>
                            <h6>Lots of great, reliable data sources</h6>
                        </div>
                        <div>
                            <h6>Explore Environmental Data Sources</h6>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>FEMA National Risk Index</Accordion.Header>
                                    <Accordion.Body>
                                    <p>test</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>EPA EJScreen</Accordion.Header>
                                    <Accordion.Body>
                                    <p>test</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Surging Seas Risk-Finder Tool</Accordion.Header>
                                    <Accordion.Body>
                                    <p>test</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Climate Check</Accordion.Header>
                                    <Accordion.Body>
                                    <p>test</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Baseline Resilience Indicators for Communities</Accordion.Header>
                                    <Accordion.Body>
                                    <p>test</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Drinking Water Violations</Accordion.Header>
                                    <Accordion.Body>
                                    <p>test</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Air Quality Hazards</Accordion.Header>
                                    <Accordion.Body>
                                    <p>test</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div><h6>Demand for environmental risk reporting is soaring</h6></div>
                        <div><h6>Demand for environmental risk reporting is soaring</h6></div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Social</Accordion.Header>
                    <Accordion.Body>
                    <p>test</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Governance</Accordion.Header>
                    <Accordion.Body>
                    <p>test</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="btn-container">
                <Link to="/report-creator" className="button ready-btn">Create Report</Link>
                <Link to="/learn-about-esg" className="button more-btn">Learn More</Link>
            </div>
        </div>
    )
}

export default LearnAbout;