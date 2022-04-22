import React from 'react'
import { Table } from 'react-bootstrap'
export default function Candidates() {
  return (
    <div>
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>Candidate ID</th>
        <th>Candidate name</th>
        <th>Election</th>
        <th>Party Name</th>
        
        
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
        <td>@twitter</td>
        
      </tr>
    </tbody>
    </Table>
      
    </div>
  )
}
