import React from 'react';
import { Container, Row } from "react-bootstrap";
import extracurricular from '../../components/images/memory-sheet.png'





export default function Memory() {
    return (
        <Container >
            <Row className='infoBox1'>
                <img
                    src={extracurricular}
                    style={{ width: "100%" }}
                    alt="Gyome the witherbloom campus' executive chef"
                />
            </Row>

        </Container>
    );
}
