import { Container, Row, Col } from "react-bootstrap";
import TopNav from "./components/topnav/TopNav";
import Home from "./pages/home/Home";

function App() {
    return (
        <Container fluid>
            <Col>
                <Row>
                    <TopNav></TopNav>
                </Row>
                <Row>
                    <Home></Home>
                </Row>
            </Col>
        </Container>
    );
}

export default App;
