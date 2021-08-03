import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Email = (props) => {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
      </FormGroup>
    
      <Button>Submit</Button>
    </Form>
  );
}

export default Email