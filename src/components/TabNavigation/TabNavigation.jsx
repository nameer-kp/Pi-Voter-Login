import React from 'react'
import { Tabs,Tab } from 'react-bootstrap';
import Candidates from '../Candidates/Candidates';
import ElectionTable from '../ElectionTable/ElectionTable';
import Voter from '../voter/Voter';


export default function TabNavigation() {
    
  return (
  

<div>
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <ElectionTable />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Voter />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Candidates />
  </Tab>
</Tabs>
    



</div>
  )
}
