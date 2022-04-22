import React,{ useState } from 'react';
import { Table } from 'react-bootstrap'
import {Button} from 'react-bootstrap';
import ElectionForm from './../ElectionForm/ElectionForm';
export default function ElectionTable() {
  const [viewForm, setViewForm] = useState(false)
  return (
    <div>
     {!viewForm?(
       <div>
         <Table striped bordered hover>
    <thead>
      <tr>
        <th>Election ID</th>
        <th>Election name</th>
        <th>No:of voters</th>
        <th>No:of Candidates</th>
        <th>Election End Date</th>

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
    
    <Button as="input" type="submit" value="Add Election" className="col-md-12  text-right" onClick={()=>{setViewForm(true)}}/>{' '}
       </div>):<ElectionForm setViewForm={setViewForm}/>}   
    
    </div>
    
  )
}

