import React,{useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'


export default function Voter() {
  const IP='http://127.0.0.1:4000'
  const [rows, setRows] = useState(null);
  function fetchTable() {
    fetch(IP+"/votertableview", {
       
     })
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
        console.log("returned data from votertable view: ",data);
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
        <th>SI:No</th>
        <th>Voter Name</th>
        <th>Age</th>
        <th>Mobile Number</th>
      </tr>
    </thead>
    <tbody>
    {rows&&(rows.map((row,index)=>(
      
      <tr>
        <td>{row['voter_id']}</td>
        <td>{row['voter_name']}</td>
        <td>{row['age']}</td>
        <td>{row['mobile']}</td>
        
      </tr>
      
    )))}
    
      
     
    </tbody>
    </Table>
      
    </div>
  )
}

