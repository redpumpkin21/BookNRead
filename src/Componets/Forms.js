import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Email = (props) => {
  return (
    <Form inline className = 'contact'>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0" id = 'newsletter'>
        <Label for="exampleEmail" className="mr-sm-2">Sign up for our newsletter</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
      </FormGroup>
    
      <Button className = 'newletter-button'>Submit</Button>
    </Form>
  );
}

export default Email