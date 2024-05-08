import { Container, Row, Col } from "react-bootstrap";
import TopNav from "./components/topnav/TopNav";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
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
                    <Row style={{ paddingTop: "40px" }}>
                        <Footer />
                    </Row>
                </Col>
            </Container>
        </AuthProvider>
    );
}

export default App;
