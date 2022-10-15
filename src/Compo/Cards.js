
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import A from '../Imgs/A1.jpg';
import B from '../Imgs/A2.jpg';
import C from '../Imgs/A3.jpg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
function GroupExample() {
  return (
    <div >
    <Row >
      <Col>
      <Card  onClick={''}>
       <Card.Img variant="top" src={C}/> 
      <Card.ImgOverlay className='imgovr'>
      {/*  */}
      <Card.Title >TRY IT TODAY
      </Card.Title>
      <Card.Title>BURGER
       WEEK
        </Card.Title>
      </Card.ImgOverlay>
       
      </Card>
      </Col>
{/*  */}
     {/*  */}

      <Col className='col-4 ' >
      <Row>
      <Card className='img-1' onClick={''}>
       <Card.Img  variant="top" src={A}/> 
      <Card.ImgOverlay className='imgovr'>
      
      <Card.Text >FRESH CHILI
      </Card.Text>
     
      </Card.ImgOverlay>
       
      </Card>
      </Row>

  <br></br>

      <Row>
      <Card className='img-2' onClick={''}>
        <Card.Img  variant="top" src={B} />
        <Card.ImgOverlay className='imgovr'>
      
      <Card.Text >MORE FUN MORE TEST
      </Card.Text>
     
      </Card.ImgOverlay>
          
      </Card>
      </Row>
      </Col>
     
    </Row>
 <br></br>
    <Button variant="warning">ALWAYS TASTY BURGER</Button>{''}
</div>

  );
}

export default GroupExample;