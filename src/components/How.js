import { Link } from "react-router-dom";
const How = () => {
    return (
        <div className="how-container">
            <h1>How?</h1>
            <p>Step 1: Use this guide to learn about ESG risks, data sources, and which data is most applicable to your municipality.</p>
            <p>Step 2: Complete the free, semi-automated Report Creator questionnaire. This tool helps municipalities access relevant data sources, run reports, and add important analysis and context that help readers understand the municipalities’ strategies and risk mitigants.</p>
            <p>Step 3: Disseminate your report to EMMA, the municipality’s website, or other means. Or don’t.</p>
            <p>Municipalities are in control of the process! Reports generated using the Report Creator are owned by the municipality. Dissemination of the report is voluntary and is done only by the municipality.</p>
            <div className="btn-container">
                <Link to="/report-creator" className="button ready-btn">Create Report</Link>
                <Link to="/learn-about-esg" className="button more-btn">Learn More</Link>
            </div>
        </div>
    )
}

export default How;