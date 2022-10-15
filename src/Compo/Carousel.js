import Carousel from 'react-bootstrap/Carousel';
import A from '../Imgs/A1.jpg';
import B from '../Imgs/A2.jpg';
import C from '../Imgs/A3.jpg';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
function IndividualIntervalsExample() {
  return (

    <div className='up-com'>
 
        <Carousel>
        
      <Carousel.Item interval={1000}>
     
        <img
          className="d-block w-50 left"
          src={C}
          alt="First slide"
        />
         <Carousel.Caption >
        
        <h2 className='car-cap'>UPCOMING EVENTS</h2>
        <p className='car-cap1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      
        <img
          className="d-block w-50"
          src={B}
          alt="Second slide"
        />
        <Carousel.Caption>
        
        <h2 className='car-cap'>UPCOMING EVENTS</h2>
        <p className='car-cap1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-50"
          src={A}
          alt="Third slide"
        />
      <Carousel.Caption >
        <h2 className='car-cap'>UPCOMING EVENTS</h2>
        <p className='car-cap1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
       
    </div>
   
  );
}

export default IndividualIntervalsExample;