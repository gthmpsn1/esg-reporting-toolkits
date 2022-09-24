import Accordion from 'react-bootstrap/Accordion';
import Home from "./Home";

const Splash = () => {
    return (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <Home />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
}

export default Splash;