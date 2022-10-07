const ReportCreator = () => {
    return (
        <div className="section-container">
            <div className="header-contents">
                <div className="box-1">
                    <h1>Welcome to ESG Report Creator</h1>
                </div>
                <div className="box-2" style={{backgroundImage: `url("https://t4.ftcdn.net/jpg/04/31/47/83/240_F_431478334_2f7drs9sKdv4mImwF0NbSzwhXWkIPMZH.jpg")`}}></div>
            </div>
            <div className="body-contents">
                <p>Report Creator is a free questionnaire that guides municipalities through the process of creating of a robust, evidence based ESG disclosure report. Once completed, the municipality can upload the report to <a target="_blank" href="https://emma.msrb.org/" title="EMMA">EMMA</a>, its website, or other location. Posting the report in a public place is completely voluntary.</p>
            </div>
            <div className="body-btn-container">
                <a target="_blank" href="https://emma.msrb.org/" title="EMMA" className="button ready-btn">Create Report</a>
            </div>
        </div>
    )
}

export default ReportCreator;