import { Link } from "react-router-dom";

const WhyESG = () => {
    return (
        <div className="why-esg-container">
            <div className="header-contents">
                <div className="box-1">
                    <h1>Why ESG Reporting?</h1>
                    <h6>Demand for ESG Reporting is Explosive</h6>
                    <p>Today's municipal debt issuers face exploding demand from investors for Environmental, Social, and Governance (ESG) disclosure, and growing evidence that investors view certain ESG risks such as climate change as material risks.</p>
                    <ul>
                        <li>The Principles of Responsible Investing have over 4,000 signatories representing over $100 trillion assets under management.</li>
                        <li>Investors have poured money into ESG-focused funds over the last decade. According to Refinitiv Lipper data, these funds now account for more than 10% of worldwide assets under management.</li>
                        <li>In the U.S. municipal market, the issuance of green, social, and sustainable municipal bonds has increased from a total of $2.3 billion in 2013 to over $52 billion in 2021.</li>
                    </ul>
                </div>
                <div className="box-2"></div>
            </div>
            <div className="box-3">
                <h6>The Challenge</h6>
                <ul>
                    <li>The ESG measurement landscape is fragmented and lacks accepted reporting standards.</li>
                    <li>“ESG” is a broad term that means different things to different people, and it covers a vast landscape of potential measures.</li>
                    <li>Municipal issuers are faced with a dizzying array of ESG data, scores, and frameworks as rating agencies, investors, ESG scoring companies and other stakeholders each use their own proprietary methodologies.</li>
                </ul>
                <p>These factors can leave issuers feeling overwhelmed. </p>
            </div>
            <div className="box-4">
                <h6>The Good News</h6>
                <p>Here's the good news: All municipal issuers can produce robust, practical, and relevant ESG disclosure. Use the free ESG Report Creator to create a robust, evidence based report for stakeholder highlighting environmental, social, and governance risks and opportunities.</p>
                <ul>
                    <li>using free, reliable data sources</li>
                    <li>create reports in-house, with limited resources</li>
                    <li>use local knowledge and experience to add important context to the data</li>
                </ul>
            </div>
            <div className="btn-container">
                <Link to="/report-creator" className="button ready-btn">Create Report</Link>
                <Link to="/how" className="button more-btn">Learn More</Link>
            </div>
        </div>
    )
}

export default WhyESG;