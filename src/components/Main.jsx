import {Container, Row, Col} from 'react-bootstrap'



function Main(props) {
  
  return (

    <Container fluid className='text-center'>
      <Row>
       <Col className='col--1'>
       <img src={`./images/${props.item.imageUrl}`} className='l--nv'/>
                {props.item.location}
                {props.item.description}
       
       </Col>
       <Col>1 of 1</Col>
       <Col>1 of 1</Col>
    </Row>
  </Container>
  )
}

export default Main
