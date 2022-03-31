import React from 'react'
import { Button,Table,Navbar,Nav } from 'react-bootstrap';

export default function ElectionTable() {
    
  return (
  

  <div>
    <Navbar bg="dark" variant="dark">
  
    <Navbar.Brand >Pi-Voter</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/Election">Election</Nav.Link>
      <Nav.Link href="/Voter">Voters</Nav.Link>
      <Nav.Link href="/Candidates">Candidates</Nav.Link>
      
    </Nav>
    
  </Navbar>
      
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>Voter ID</th>
      <th>Voter's name</th>
      <th>Election name</th>
      <th>No:of voters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>



</div>
  )
}
