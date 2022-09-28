import { Link } from "react-router-dom";
import Environmental from "./Environmental";
import Social from "./Social";
import Governance from "./Governance";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const LearnAbout = () => {
    const showInfo = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="learn-about-container">
            <div className="header-contents">
                <div className="box-1">
                    <h1>Learn About ESG Reporting</h1>
                    <p>Use this ESG Reporting Toolkit to learn about Environmental, Social and Governance risks, data sources,  and reporting.</p>
                </div>
                <div className="box-2"></div>
            </div>
            <div className="box-3">
                <Tabs defaultIndex={0}>
                    <TabList>
                        <Tab>Environmental</Tab>
                        <Tab>Social</Tab>
                        <Tab>Governance</Tab>
                    </TabList>
                    <TabPanel><Environmental /></TabPanel>
                    <TabPanel><Social /></TabPanel>
                    <TabPanel><Governance /></TabPanel>
                </Tabs>
            </div>
            <div className="btn-container">
                <Link to="/report-creator" className="button ready-btn">Create Report</Link>
                <Link to="/report-creator" className="button more-btn">Learn More</Link>
            </div>
        </div>
    )
}

export default LearnAbout;

