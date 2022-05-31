import {Container, Navbar} from 'react-bootstrap'
import { MdTravelExplore } from 'react-icons/md';

function Nav() {
  // Style react icon
  const style = {color: "white", fontSize: "2em"}

  return (

  <Navbar className='nav--background'>
    <Container className="justify-content-center p-1">
      <Navbar.Brand href="#home">
        <MdTravelExplore style={style} className="m-2"/>
          <span className='header--name'>My Travel Journal</span> 
      </Navbar.Brand>
    </Container>
  </Navbar>

  )
}

export default Nav