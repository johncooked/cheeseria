import { Container, Row, Col } from "react-bootstrap";
import TopNav from "./components/topnav/TopNav";
import Home from "./pages/home/Home";
import { AuthProvider } from "./components/auth/AuthContext";

function App() {
    return (
        <AuthProvider>
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
        </AuthProvider>
    );
}

export default App;
