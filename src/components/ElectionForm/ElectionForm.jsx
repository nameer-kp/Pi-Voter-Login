
import React from 'react'
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Voter from '../voter/Voter';


export default function ElectionForm(props) {
 const [noOfVoters,setNoOfVoters]=useState(0)
 const [noOfCandidates,setNoOfCandidates]=useState(0)
 const [electionName,setElectionName]=useState('')
  

  const [allVoters, setAllVoters] = useState([
    { name: "", voterId: "", mobileNo: null, age: null},
  ]);
  const [allVotersPhoto,setAllVotersPhoto]=useState([])
  const [allCandidatesLogo,setAllCandidatesLogo]=useState([])
  const [allCandidates, setAllCandidates] = useState([
    { name: "", partyName: "", CanId: "" },
  ]);
  const handleAddVoters = () => {
    const values = [...allVoters];
    values.push({
      name: "",
      voterId: "",
      mobileNo: null,
      age: null
    });
    setAllVoters(values);
  };
  const handleRemoveVoters = (index) => {
    const values = [...allVoters];
    values.splice(index, 1);
    setAllVoters(values);
  };
  function onSubmitHandler(){
   const isConfirm= window.confirm("are you sure?")
   if(isConfirm){
    const formData = new FormData();
    formData.append('Voters', JSON.stringify(allVoters));
    for (let i = 0 ; i < allVotersPhoto.length ; i++) {
      formData.append("VoterPhotos", allVotersPhoto[i]);
  }
  for (let i = 0 ; i < allCandidatesLogo.length ; i++) {
    formData.append("CandidateLogos", allCandidatesLogo[i]);
}
    formData.append('Candidates',JSON.stringify(allCandidates));
    formData.append('ElectionDetails',JSON.stringify({electionName,noOfCandidates,noOfVoters}))
    console.log(allVoters);
    fetch(
			'http://127.0.0.1:4000/adddata',
			{
				method: 'POST',
				body: formData,
        // headers:{'content-type': 'multipart/form-data'},

			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
        window.alert("Election Added Successfully")
        // document.getElementById("back").click()
			})
			.catch((error) => {
				console.error('Error:', error);
			});

   }
  }
  const handleInputChange = (index, event) => {
    const values = [...allVoters];
    const valuePhotos = allVotersPhoto;
    const updatedValue = event.target.name;
    
    if(updatedValue=='photo'){
      var file=event.target.files[0]
      var blob = file.slice(0, file.size, 'image/jpg'); 
      var newFile = new File([blob],allVoters[index]['voterId']+'.jpg', {type: 'image/jpg'});  
      valuePhotos[index]=newFile
      

    }
    else{
      values[index][updatedValue] = event.target.value;
    }
    setAllVotersPhoto(valuePhotos)
    setAllVoters(values);
  };
  

  const handleAddCandidates = () => {
    const values = [...allCandidates];
    values.push({
      name: "",
      partyName: "",
      CanId: "",
      
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
    const valuePhotos = allCandidatesLogo;

    values[index][updatedValue] = event.target.value;
    if(updatedValue=='logo'){
      var file=event.target.files[0]
      var blob = file.slice(0, file.size, 'image/jpg'); 
      var newFile = new File([blob],allCandidates[index]['CanId']+'.jpg', {type: 'image/jpg'});  
      console.log("----",allCandidates[index]['CanId']);
      valuePhotos[index]=newFile
      console.log(valuePhotos)

    }
    else{
      values[index][updatedValue] = event.target.value;
    }
    setAllCandidatesLogo(valuePhotos)
    setAllCandidates(values);
  };



 
  return (
    <div>
      <label for="fname">Election Name:</label><br/>
  <input type="text" id="fname" name="fname" onChange={(event)=>{setElectionName(event.target.value)}} /><br/>
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
                            name="voterId"
                            placeholder="Enter Voter Id"
                            value={field.voterId}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="mobileNo"
                            placeholder="Enter Mobile No"
                            value={field.mobileNo}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="age"
                            placeholder="Enter Age"
                            value={field.age}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Choose Photo</Form.Label>
                          <Form.Control 
                          name="photo"
                          type="file" 
                         
                          onChange={(event)=> handleInputChange(index,event)}/>
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
                            name="CanId"
                            placeholder="Enter Candidate Id"
                            value={field.voterId}
                            onChange={(event) =>
                              handleInputChangeCandidates(index, event)
                            }
                          />
                        </Form.Group>
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
                            name="partyName"
                            placeholder="Enter Party Name"
                            value={field.partyName}
                            onChange={(event) =>
                              handleInputChangeCandidates(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Choose Photo</Form.Label>
                          <Form.Control 
                          name="logo"
                          type="file" 
                          
                          onChange={(event)=> handleInputChangeCandidates(index,event)}/>
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
{noOfCandidates&&noOfVoters&&<Button as="input" type="submit" value="Submit" className="col-md-12  text-right" onClick={(onSubmitHandler)}/>}
<Button as="input" type="submit" id='back' value="Back" className="col-md-12  text-right" onClick={()=>{props.setViewForm(false)}}/>{' '}
    </div>
  )
}

