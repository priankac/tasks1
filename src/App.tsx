import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import animal from "./animals/shutterstock_2068599128-1.jpg.avif";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    UD CISC275 with React Hooks and TypeScript Priyanka
                    Chaudhuri Hello World
                </h1>
            </header>
            <img src={animal} alt="Animal" width={300} />

            <div>Animals</div>
            <ul>
                <li>Lion</li>
                <li>Wombat</li>
                <li>Frog</li>
            </ul>
            <Button
                variant="primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container style={{ marginTop: "2rem" }}>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
