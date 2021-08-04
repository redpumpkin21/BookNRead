import React from 'react'
import { FormGroup, Label, Input} from 'reactstrap';

const Search = () =>{
return(
    <FormGroup>
    <Label for="exampleSearch"></Label>
    <Input
      type="search"
      name="search"
      id="exampleSearch"
      placeholder="search me"
    />
  </FormGroup>
)
}
export default Search