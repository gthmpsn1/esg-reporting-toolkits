import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FEMARiskIndex from "./FEMARiskIndex";

const Environmental = () => {
    return (
        <div className='dropdown-container-1'>
            <h4>Demand for environmental risk reporting is soaring</h4>
            <p>Investors and regulators are increasingly focused on the materiality of environmental risks, including the impact of climate change. We recommend that you are just getting started with ESG reporting that you start with environmental risk. This approach is also recommended by the Government Finance Officers Association. It’s ok to create a disclosure report focused solely on “E” risks as a starting point if doing a full ESG report is too much to do all at once. The most important thing is to get started, and we believe “E’ is a good place to start.</p>
                
            <h4>Lots of great, reliable data sources</h4>
            <p>There are a large number of reliable and easy-to-use sources for identifying and measuring environmental risks. A great place to start building your ESG disclosure report is by running reports for your municipality for each of these sources that apply to your type of municipality (see column “Applicability” in the table below). That will give you a sense of which risks are most prominent for your location, which you probably already know. These are the risks that investors are most likely to be interested in learning more about, especially your strategies to mitigate those risks, which you can describe in a narrative section in the Report Creator questionnaire.</p>

            <h4>Explore Environmental Data Sources</h4>
            <Tabs defaultIndex={0}>
                <TabList>
                    <Tab>FEMARiskIndex</Tab>
                    <Tab>EPA EJScreen</Tab>
                    <Tab>Surging Seas Risk-Finder Tool</Tab>
                    <Tab>Climate Check</Tab>
                    <Tab>Baseline Resilience Indicators for Communities</Tab>
                    <Tab>Drinking Water Violations</Tab>
                    <Tab>Air Quality Hazards</Tab>
                </TabList>
                <TabPanel><FEMARiskIndex /></TabPanel>
                <TabPanel>Test 2</TabPanel>
                <TabPanel>Test 3</TabPanel>
                <TabPanel>Test 4</TabPanel>
                <TabPanel>Test 5</TabPanel>
                <TabPanel>Test 6</TabPanel>
                <TabPanel>Test 7</TabPanel>
            </Tabs>
        </div>
    )
}

export default Environmental;