import Form from 'react-bootstrap/Form';

function Name() {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="Text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          
        </Form.Group>
    </>
  );
}

export default Name;