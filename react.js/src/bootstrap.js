import "./bootstrap.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function Bootstrap() {
    // return (
    //     <>
    //     <Button variant="primary">Primary</Button>{' '}
    //     <Button variant="secondary">Secondary</Button>{' '}
    //     <Button variant="succes">Succes</Button>{' '}
    //     <Button variant="warning">Warning</Button>{' '}
    //     <Button variant="danger">Danger</Button>{' '}
    //     <Button variant="info">Info</Button>{' '}
    //     <Button variant="light">Light</Button>{' '}
    //     <Button variant="dark">Dark</Button>
    //     <Button variant="link">Link</Button>    

    //     </>
    // )

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    xs=12 md=8
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>
            <Row>
                <Col xs={6}>xs=6</Col>
                <Col xs={6}>xs=6</Col>
            </Row>
        </Container>
    )
}
    
export default Bootstrap;