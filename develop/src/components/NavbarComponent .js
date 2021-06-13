import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent (props){
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (!filter) {
      return;
    }

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setTitle(res.data[1][0]);
        setUrl(res.data[3][0]);
      })
      .catch(err => console.log(err));
  }, [search]);

return(
<>
<Navbar bg="light" variant="light">
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="mr-auto">
  <Button variant="outline-primary">Primary</Button>{' '}
  <Button variant="outline-secondary">Secondary</Button>{' '}
  <Button variant="outline-success">Success</Button>{' '}
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
<Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-primary">Search</Button>
</Form>
</Navbar>
</>
)
}
export default NavbarComponent;