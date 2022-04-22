import React,{ useState }  from 'react'
import { Tabs,Tab } from 'react-bootstrap';
import Candidates from '../Candidates/Candidates';
import ElectionTable from '../ElectionTable/ElectionTable';
import Voter from '../voter/Voter';
import {Button,Container,Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

export default function TabNavigation(props) {

const [viewForm, setViewForm] = useState(false)
return (
  

<div>
  
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Navbar</Navbar.Brand>
    <Nav className="me-auto" >
    
    <Button as="input" type="submit" value="Log-out" className="col-md-12  text-right" onClick={()=>{props.login(false)}}/>{' '}

    </Nav>
    </Container>
  </Navbar>
<Tabs defaultActiveKey="Election" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Election" title="Election">
    <ElectionTable />
  </Tab>
  <Tab eventKey="Voter" title="Voter">
    <Voter />
  </Tab>
  

  
  <Tab eventKey="Candidate" title="Candidate">
  
    <Candidates/>
    
  </Tab>
</Tabs>


    












  

    



</div>
  )
}
