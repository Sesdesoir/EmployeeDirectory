import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from './Card';
function NavbarComponent (props){
  const [filter, setFilter] = useState([]);
  const [filteredEmployees , setFilteredEmployees] = useState([props.employees]);
  

                                        //if array say which key ex 'name'  for name: 'Susie'
  let searchInArray=(searchQuery, array, objectKey=null)=>{
    return array.filter(d=>{
        let data =objectKey? d[objectKey] : d //Incase If It's Array Of Objects.
         let dataWords= typeof data=="string" && data?.split(" ")?.map(b=>b&&b.toLowerCase().trim()).filter(b=>b)
        let searchWords = typeof searchQuery=="string"&&searchQuery?.split(" ").map(b=>b&&b.toLowerCase().trim()).filter(b=>b)
  
       let matchingWords = searchWords.filter(word=>dataWords.includes(word))
  
      return matchingWords.length
  
  });
  }
  // useEffect(() => {
  //   if (!filter || filter === '' || filter === undefined) {
  //     return setFilteredEmployees(employees);
  //   }
  //   else{
  //   setFilteredEmployees(searchInArray(filter , employees , 'name'));
  //   }
  // }, []);
                                          

return(
<>
{console.log(props.employees.cell)}
<Navbar bg="light" variant="light">
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="mr-auto">
  <Button variant="outline-primary">Primary</Button>{' '}
  <Button variant="outline-secondary">Secondary</Button>{' '}
  <Button variant="outline-success">Success</Button>{' '}
</Nav>
<Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={event =>setFilter(event.target.value.trim())}/>
  <Button variant="outline-primary">Search</Button>
</Form>
</Navbar>
<div>
  {props.employees.map(employee => {
      return(<> 
        <Card employees={employee}/>
      </>)
  })   
  }  
</div>
</>
)
}
export default NavbarComponent;