import {Container, Row, Col} from 'react-bootstrap'



function Main(props) {
  
  return (

    <Container fluid="lg" className='col--whole text-center pt-4'>
      <Row>
        <Col className='col--1'>
           <img src={`./images/${props.item.imageUrl}`} alt="destinations" className='pic--loc'/>
               <div className='card--info pt-2'>
                 <h4 className='loc--name'>{props.item.location} <a href={props.item.googleMapsUrl} rel="noreferrer" target="_blank">
                   <span className='google--map'>View on Google Maps</span></a></h4>
                      <h2>{props.item.title}</h2>
                         <p className='desc'>{props.item.description}</p>
                   </div>
       
             </Col>
          </Row>
</Container>
  

  
  )
}

export default Main
