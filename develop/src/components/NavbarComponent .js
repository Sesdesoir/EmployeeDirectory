import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from './Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
function NavbarComponent (props){
  var people = props.employees;
  const [filter, setFilter] = useState([]);
  const [i , seti] = useState(1);
  const [location , setLocation] = useState(1);
  //need to work on filter! Once filter works project is technically done
  //save for some desired styling
                                        //if array say which key ex 'name'  for name: 'Susie'
  // let searchInArray=(searchQuery, array, objectKey='name')=>{
  //   return array.filter(d=>{
  //       let data =objectKey? d[objectKey] : d //Incase If It's Array Of Objects.
  //        let dataWords= typeof data=="string" && data?.split(" ")?.map(b=>b&&b.toLowerCase().trim()).filter(b=>b)
  //       let searchWords = typeof searchQuery=="string"&&searchQuery?.split(" ").map(b=>b&&b.toLowerCase().trim()).filter(b=>b)
  //       console.dir("searchWords: " + searchWords);
  //      let matchingWords = searchWords.filter(word=>dataWords.includes(word));
  //     return matchingWords;
  
  // });
  // }
 
  let nameSort=(event)=>{
    event.preventDefault();
    people.sort((a, b) =>(a.name.first > b.name.first) ? -i : (a.name.first === b.name.first) ? ((a.name.last > b.name.last) ? -i : i) : i );
    seti(-i);
  }

  let locationSort=(event)=>{
    event.preventDefault();
    people.sort((a, b) =>(a.location.state > b.location.state) ? -location : (a.location.state === b.location.state) ? ((a.location.city > b.location.city) ? -location : location) : location );
    setLocation(-location);
  }

//   var filterPeople = () =>{ 
//     people.filter(function (el) {
//     return el.price <= 1000 &&
//            el.sqft >= 500 &&
//            el.num_of_beds >= 2 &&
//            el.num_of_baths >= 1.5; // Changed this so a home would match
//   });
// }

                                          

return(
<>
<Navbar style={{backgroundColor: "#2c3e50"}}>
<Navbar.Brand href="#home">Employees</Navbar.Brand>
<Nav className="mr-auto">
  <Button variant="outline-primary" onClick={e =>nameSort(e)}>Sort By Name</Button>{' '}
  <Button variant="outline-secondary" onClick={e=> locationSort(e)}>Sort by location</Button>{' '}
</Nav>
{/* <Form inline>
  <FormControl type="text" placeholder="Name" className="mr-sm-2" onChange={event =>setFilter(event.target.value.trim())}/>
  <Button variant="outline-primary">Search</Button>
</Form> */}
</Navbar>
<Row style={{background: "linear-gradient(to right, #0f0c29, #302b63, #24243e"}}>
  {people.map(employee => (
     <Card employees={employee}/>     
  ))   
  }  
</Row>
</>
)
}
export default NavbarComponent;