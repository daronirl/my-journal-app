import {Container, Row, Col} from 'react-bootstrap'



function Main(props) {
  
  return (

    <Container fluid className='text-center'>
      <Row>
       <Col>{props.item.location}</Col>
       <Col>1 of 1</Col>
       <Col>1 of 1</Col>
    </Row>
  </Container>
  )
}

export default Main
