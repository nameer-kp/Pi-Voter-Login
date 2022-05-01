import React,{useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'
export default function Candidates() {
  const IP='http://127.0.0.1:4000'
  const [rows, setRows] = useState(null);
  function fetchTable() {
    fetch(IP+"/candidatetableview", {
       
     })
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
        console.log("returned data from candidatetable view: ",data);
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
    {rows&&(rows.map((row,index)=>(
      
      <tr>
        <td>{row['candidate_id']}</td>
        <td>{row['candidate_name']}</td>
        <td>{row['election_name']}</td>
        <td>{row['party_name']}</td>
        
      </tr>
      
    )))}
    
      
     
    </tbody>
    </Table>
      
    </div>
  )
}
