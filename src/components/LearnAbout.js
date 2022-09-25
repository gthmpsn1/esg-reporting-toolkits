import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';

const LearnAbout = () => {
    return (
        <div className="learn-about-container">
            <h1>Learn About ESG Reporting</h1>
            <p>Use this ESG Reporting Toolkit to learn about Environmental, Social and Governance risks, data sources,  and reporting.</p>
            <Collapsible open={true} trigger="Environmental">
                <h4>Demand for environmental risk reporting is soaring</h4>
                <p>Investors and regulators are increasingly focused on the materiality of environmental risks, including the impact of climate change. We recommend that you are just getting started with ESG reporting that you start with environmental risk. This approach is also recommended by the Government Finance Officers Association. It’s ok to create a disclosure report focused solely on “E” risks as a starting point if doing a full ESG report is too much to do all at once. The most important thing is to get started, and we believe “E’ is a good place to start.</p>
                
                <h4>Lots of great, reliable data sources</h4>
                <p>There are a large number of reliable and easy-to-use sources for identifying and measuring environmental risks. A great place to start building your ESG disclosure report is by running reports for your municipality for each of these sources that apply to your type of municipality (see column “Applicability” in the table below). That will give you a sense of which risks are most prominent for your location, which you probably already know. These are the risks that investors are most likely to be interested in learning more about, especially your strategies to mitigate those risks, which you can describe in a narrative section in the Report Creator questionnaire.</p>

                <h4>Explore Environmental Data Sources</h4>
                <ul>
                    <li>
                        <Collapsible trigger={"FEMA National Risk Index"}>
                            <table>
                                <tr><th colSpan={2}>Data Source Snapshot: FEMA National Risk Index</th></tr>
                                <tr>
                                    <td>Source type</td>
                                    <td>Government</td>
                                </tr>
                                <tr>
                                    <td>Applicability</td>
                                    <td>Counties, Census tracts</td>
                                </tr>
                                <tr>
                                    <td>Best features</td>
                                    <td>
                                        <ul>
                                            <li>Easy, intuitive, map-based, color coded</li>
                                            <li>Scores the relative risk for each of 18 natural hazards compared to state and nation</li>
                                            <li>Estimates of monetary damage by hazard</li>
                                            <li>Combines hazard risk with social vulnerability and community resiliency to form the “Risk Index”</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Limitations</td>
                                    <td>Difficult to use for states and entities not coterminous with a county</td>
                                </tr>
                                <tr>
                                    <td>Where to go</td>
                                    <td>https://hazards.fema.gov/nri/map</td>
                                </tr>
                                <tr>
                                    <td>Other</td>
                                    <td>Free data downloads available</td>
                                </tr>
                            </table>
                            <ul>
                                <li>
                                    <h6>What it Is</h6>
                                    <p>Easy to use map-based online tool. Color coding identifies geographic areas at highest risk. Provides data that can be used in several ways:</p>
                                    <ul>
                                        <li>Identify a community’s exposure to 18 natural hazards such as wildfire, heat wave, drought, and coastal flooding, relative to state and national risk for each of those hazards.</li>
                                        <li>Quantify expected annual loss estimates, such as physical damage to buildings and agricultural value loss, and loss estimates per population. Expected losses are displayed as both composite losses, and losses attributed to specific hazards.</li>
                                        <li>Identify the composite risk index for the community, which combines natural hazard risk with measures of community resiliency and social vulnerability.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h6>Best Fit and Limitations</h6>
                                    <p>Best applied to counties and census tracts. Map tool doesn’t allow users to run reports for states, but reports do show comparison of county/census tracts to state and national levels. Sophisticated state users may wish to check out the data downloads. Cities and school districts may wish to run reports for the county or counties most applicable to their geographic boundaries.</p>
                                </li>
                                <li>
                                    <h6>Adding Context</h6>
                                    <p>You can add context to the data generated by the FEMA National Risk Index in the following ways:</p>
                                    <ul>
                                        <li>Discuss top hazards. Discuss the top natural hazard risks identified in the report and how your community manages it. How many hazards you choose to discuss should be based on the data. For example, if your community has three hazards that are higher risk than the state or nation, you may discuss those three hazards, or if there is one risk that is far and away the highest, focus on that one. Discuss any mitigation strategies your community uses, including local, state or regional efforts and any collaborative efforts with other communities.</li>
                                        <li>{`Put estimated losses in context. Add context to the expected annual loss estimates. Is an expected annual loss of $7.5 million large or small? That depends on the community's population, wealth, the value of its tax base, etc. Comparing the expected annual loss figures to the community's GDP, its population, or tax base (assessed or market value) will help users understand the relative gravity of those potential losses. If there is one type of expected loss that dominates, such as agricultural loss, focus the most on your community's economic reliance on agriculture and any mitigation strategies such as insurance, infrastructure resiliency projects, regional or state mitigation collaboratives, etc.`}</li>
                                        <li>Comment on the Risk Index. The risk index adds social and community resiliency factors to the natural hazards data to provide an overall risk index score. A community at high exposure to hazards may still have a relatively low risk index score because of the social and resilience factors. Discuss your views of the social and resilience factors that are most relevant to the risk index.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h6>Sample Usage</h6>
                                    <p>Following is an example for Carson County, TX</p>
                                    <p>The image below displays the home page of the FEMA National Risk Index site. The colors on the map correlate with the displayed legend. To start using the tool, select “County View” or “Census Tract View”, depending on which type of geographic area you are working with.</p>
                                </li>
                            </ul>
                        </Collapsible> 
                    </li>
                    <li><Collapsible trigger={"EPA EJScreen"}>
                        <p>This is an example.</p>
                    </Collapsible></li>
                    <li><Collapsible trigger={"Surging Seas Risk-Finder Tool"}>
                        <p>This is an example.</p>
                    </Collapsible></li>
                    <li><Collapsible trigger={"Climate Check"}>
                        <p>This is an example.</p>
                    </Collapsible></li>
                    <li><Collapsible trigger={"Baseline Resilience Indicators for Communities"}>
                        <p>This is an example.</p>
                    </Collapsible></li>
                    <li><Collapsible trigger={"Drinking Water Violations"}>
                        <p>This is an example.</p>
                    </Collapsible></li>
                    <li><Collapsible trigger={"Air Quality Hazards"}>
                        <p>This is an example.</p>
                    </Collapsible></li>
                </ul>
            </Collapsible>
            <Collapsible trigger={"Social"}>
                <h6>Testing Social</h6>
            </Collapsible>
            <Collapsible trigger={"Governance"}>
                <h6>Testing Governance</h6>
            </Collapsible>
            <div className="btn-container">
                <Link to="/report-creator" className="button ready-btn">Create Report</Link>
                <Link to="/learn-about-esg" className="button more-btn">Learn More</Link>
            </div>
        </div>
    )
}

export default LearnAbout;

