import {Container, Navbar} from 'react-bootstrap'
import { MdTravelExplore } from 'react-icons/md';

function Nav() {
  return (

    <Navbar bg="dark" variant="dark">
    <Container className="justify-content-center p-2">
      <Navbar.Brand href="#home">
        <MdTravelExplore  className="m-2"/>
           My Travel Journal
      </Navbar.Brand>
    </Container>
  </Navbar>

  )
}

export default Nav