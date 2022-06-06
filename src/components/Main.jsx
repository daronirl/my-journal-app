import {Container, Row, Col} from 'react-bootstrap'



function Main(props) {
  
  return (

    <Container fluid className='col--whole text-center pt-4'>
      <Row>
        <Col className='col--1'>
           <img src={`./images/${props.item.imageUrl}`} className='l--nv'/>
                <h3>{props.item.title} <span className='google--map'><a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></span></h3>
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
