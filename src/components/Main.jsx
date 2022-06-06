import {Container, Row, Col} from 'react-bootstrap'



function Main(props) {
  
  return (

    <Container fluid className='col--whole text-center pt-4'>
      <Row>
        <Col className='col--1'>
           <img src={`./images/${props.item.imageUrl}`} className='l--nv'/>
               <div className='card--info'>
                <h4 className='loc--name'>{props.item.location} <a href={props.item.googleMapsUrl} target="_blank">
                  <span className='google--map'>View on Google Maps</span></a></h4>
                     <h2>{props.item.title}</h2>
                        <p>{props.item.description}</p>
            </div>
       
       </Col>
       <Col className='col--1'>
           <img src={`./images/${props.item.imageUrl}`} className='l--nv'/>
               <div className='card--info'>
                <h4 className='loc--name'>{props.item.location} <a href={props.item.googleMapsUrl} target="_blank">
                  <span className='google--map'>View on Google Maps</span></a></h4>
                     <h2>{props.item.title}</h2>
                        <p>{props.item.description}</p>
            </div>
       
       </Col>
       <Col className='col--1'>
           <img src={`./images/${props.item.imageUrl}`} className='l--nv'/>
               <div className='card--info'>
                <h4 className='loc--name'>{props.item.location} <a href={props.item.googleMapsUrl} target="_blank">
                  <span className='google--map'>View on Google Maps</span></a></h4>
                     <h2>{props.item.title}</h2>
                        <p>{props.item.description}</p>
            </div>
       
       </Col>
    </Row>
  </Container>
  )
}

export default Main
