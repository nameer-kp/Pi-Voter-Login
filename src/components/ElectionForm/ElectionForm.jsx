
import React from 'react'
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";


export default function ElectionForm(props) {
 const [noOfVoters,setNoOfVoters]=useState(0)
 const [noOfCandidates,setNoOfCandidates]=useState(0)


  const [allVoters, setAllVoters] = useState([
    { name: "", voterId: "", mobileNo: null, age: null },
  ]);
  const [allCandidates, setAllCandidates] = useState([
    { name: "", partyName: "", price: null, rating: null },
  ]);
  const handleAddVoters = () => {
    const values = [...allVoters];
    values.push({
      name: "",
      description: "",
      price: null,
      rating: null,
    });
    setAllVoters(values);
  };
  const handleRemoveVoters = (index) => {
    const values = [...allVoters];
    values.splice(index, 1);
    setAllVoters(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...allVoters];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAllVoters(values);
  };
 

  const handleAddCandidates = () => {
    const values = [...allCandidates];
    values.push({
      name: "",
      description: "",
      price: null,
      rating: null,
    });
    setAllCandidates(values);
  };
  const handleRemoveCandidates = (index) => {
    const values = [...allCandidates];
    values.splice(index, 1);
    setAllCandidates(values);
  };

  const handleInputChangeCandidates = (index, event) => {
    const values = [...allCandidates];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAllCandidates(values);
  };

  console.log(allVoters);

 
  return (
    <div>
      <label for="fname">Election Name:</label><br/>
  <input type="text" id="fname" name="fname" value="John"/><br/>
  <label for="lname">No of Candidates</label><br/>
  <input type="text"  name="lname" onChange={(event)=>{setNoOfCandidates(event.target.value)}}/><br/>
  <label for="lname">No of Voters</label><br/>
  <input type="text"  name="lname" onChange={(event)=>{setNoOfVoters(event.target.value)}}/><br/>
  
      
      {noOfVoters>0&&
      
      <Container>
      <Row className="justify-content-center">
        <Col xs="6" >
          <h3>Voters Form Fields</h3>
          <Button variant="primary" onClick={() => handleAddVoters()}>
            Add Voter
          </Button>
        </Col>
        <Col xs="12">
          <Form>
            <Row className="justify-content-center">
              {allVoters.length > 0 && (
                <>
                  {allVoters.map((field, index) => (
                    <Col xs="4">
                      <div className="add-player-div">
                        <h4>Voter {index + 1}</h4>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Voter Name"
                            value={field.name}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="description"
                            placeholder="Enter Voter Id"
                            value={field.voterId}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="number"
                            name="price"
                            placeholder="Enter Mobile No"
                            value={field.mobileNo}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="number"
                            name="rating"
                            placeholder="Enter Age"
                            value={field.age}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Button
                          variant="secondary"
                          onClick={() => handleRemoveVoters(index)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </Col>
                  ))}
                </>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
}
{noOfCandidates>0&&
      
      <Container>
      <Row className="justify-content-center">
        <Col xs="6" >
          <h3>Candidates Form Fields</h3>
          <Button variant="primary" onClick={() => handleAddCandidates()}>
            Add Candidate
          </Button>
        </Col>
        <Col xs="12">
          <Form>
            <Row className="justify-content-center">
              {allCandidates.length > 0 && (
                <>
                  {allCandidates.map((field, index) => (
                    <Col xs="4">
                      <div className="add-player-div">
                        <h4>Candidate {index + 1}</h4>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Candidate Name"
                            value={field.name}
                            onChange={(event) =>
                              handleInputChangeCandidates(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="description"
                            placeholder="Enter Party Name"
                            value={field.partyName}
                            onChange={(event) =>
                              handleInputChangeCandidates(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="number"
                            name="price"
                            placeholder="Enter Price"
                            value={field.price}
                            onChange={(event) =>
                              handleInputChangeCandidates(index, event)
                            }
                          />
                        </Form.Group>
                        
                        <Button
                          variant="secondary"
                          onClick={() => handleRemoveCandidates(index)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </Col>
                  ))}
                </>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
}
<Button as="input" type="submit" value="Back" className="col-md-12  text-right" onClick={()=>{props.setViewForm(false)}}/>{' '}
    </div>
  )
}

