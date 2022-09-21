import { Card, Container, Col, Row, Image } from "react-bootstrap";
import antmant from "../assets/images/super-hero/antman.jpg"
import avenger from "../assets/images/super-hero/avenger.jpg"
import batman from "../assets/images/super-hero/batman.jpg"
import robinhood from "../assets/images/super-hero/robinhood.jpg"
import spiderman from "../assets/images/super-hero/spiderman.jpg"
import superman from "../assets/images/super-hero/superman.jpg"


const SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPER HERO MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="bg-dark text-white movieImage p-2 m-2">
                            <Image src={antmant} alt="Dune Movies" className="images"/>
                            <Card.Title className="text-center">ANT-MAN</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting
                            to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage p-2 m-2">
                            <Image src={avenger} alt="Dune Movies" className="images"/>
                            <Card.Title className="text-center">AVENGER</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting
                            to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage p-2 m-2">
                            <Image src={spiderman} alt="Dune Movies" className="images"/>
                            <Card.Title className="text-center">SPIDER-MAN</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting
                            to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage p-2 m-2">
                            <Image src={batman} alt="Dune Movies" className="images"/>
                            <Card.Title className="text-center">BATMAN</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting
                            to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage p-2 m-2">
                            <Image src={robinhood} alt="Dune Movies" className="images"/>
                            <Card.Title className="text-center">ROBINHOOD</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting
                            to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage p-2 m-2">
                            <Image src={superman} alt="Dune Movies" className="images"/>
                            <Card.Title className="text-center">SUPERMAN</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting
                            to additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero