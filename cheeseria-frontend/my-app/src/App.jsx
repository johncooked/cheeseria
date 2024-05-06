import { Container, Row, Col } from "react-bootstrap";
import TopNav from "./components/topnav/TopNav";
import Home from "./pages/home/Home";

function App() {
    return (
        <Container fluid>
            <Col>
                <Row>
                    <TopNav />
                </Row>
                <Row>
                    <Home />
                </Row>
            </Col>
        </Container>
    );
}

export default App;
