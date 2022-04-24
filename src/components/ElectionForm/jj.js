const [allCandidates, setAllCandidates] = useState([
    { name: "", description: "", price: null, rating: null },
  ]);

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

  const handleInputChange = (index, event) => {
    const values = [...allCandidates];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAllCandidates(values);
  };
{noOfCandidates>0&&
      
    <Container>
    <Row className="justify-content-center">
      <Col xs="6" >
        <h3>Voter Form Fields</h3>
        <Button variant="primary" onClick={() => handleAddCandidates()}>
          Add Voter
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
                      <h4>Voter {index + 1}</h4>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter Name"
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
                          placeholder="Enter Description"
                          value={field.description}
                          onChange={(event) =>
                            handleInputChange(index, event)
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
                            handleInputChange(index, event)
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="number"
                          name="rating"
                          placeholder="Enter Rating"
                          value={field.rating}
                          onChange={(event) =>
                            handleInputChange(index, event)
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