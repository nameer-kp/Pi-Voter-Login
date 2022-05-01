import React,{ useState,useEffect } from 'react';
import { Table } from 'react-bootstrap'
import {Button} from 'react-bootstrap';
import ElectionForm from './../ElectionForm/ElectionForm';
export default function ElectionTable() {
  const IP='http://127.0.0.1:4000'
  const [viewForm, setViewForm] = useState(false)
  const [rows, setRows] = useState(null);
  function fetchTable() {
    fetch(IP+"/electiontableview", {
       
     })
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
        console.log("returned data from electiontable view: ",data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchTable()
  }, []);
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
      </tr>
    </thead>
    <tbody>
    {rows&&(rows.map((row,index)=>(
      
      <tr>
        <td>{row['election_id']}</td>
        <td>{row['election_name']}</td>
        <td>{row['no_of_voters']}</td>
        <td>{row['no_of_candidates']}</td>
        
      </tr>
      
    )))}
    
      
     
    </tbody>
    </Table>
    
    <Button as="input" type="submit" value="Add Election" className="col-md-12  text-right" onClick={()=>{setViewForm(true)}}/>{' '}
       </div>):<ElectionForm setViewForm={setViewForm}/>
       }   
    
    </div>
    
  )
}

