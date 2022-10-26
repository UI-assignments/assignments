import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


export default function Header() {
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Nav>
                        <Nav.Link href={'/'} >Home</Nav.Link>
                        <Nav.Link href={'/about'} >About</Nav.Link>
                        <Nav.Link href={'/contact'} >Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
