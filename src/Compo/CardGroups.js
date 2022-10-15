import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import '../App.css';
function CardGroups() {
  return (
    <div>
    <h1 className='h1-choo'>CHOOSE & ENJOY</h1>
    <p className='p-choo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    <CardGroup id='group'>
    
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=826&t=st=1665822722~exp=1665823322~hmac=ee4205708ebc4efa67fd74ad8929cf97a97f87a96759d0eb84fdae31b9828722" />
        <Card.Body>
          <Card.Title>LOREM IPSUM DOLOR</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        
        <Button  variant="danger">ORDER NOW</Button>{' '}
        
      </Card>
      <Card >
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/chicken-burger-wooden-board-tomato-lettuce-side-view_141793-2754.jpg?w=826&t=st=1665822787~exp=1665823387~hmac=f193d23df08dcd9eb01021a02449e5b28028660567bed99648be08dcaa3bfb81" />
        <Card.Body>
          <Card.Title>LOREM IPSUM DOLOR</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
        <Button variant="danger">ORDER NOW</Button>{' '}
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/serving-burger-background_1321-4511.jpg?w=826&t=st=1665822838~exp=1665823438~hmac=b6eae8fbbfe8398545965816730fc208c6e0bfb99309d1e0c11caffaba136002" />
        <Card.Body>
          <Card.Title>LOREM IPSUM DOLOR</Card.Title>
          <Card.Text>
          This card has supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        
        <Button variant="danger">ORDER NOW</Button>{' '}
        
      </Card>
    </CardGroup>
    </div>
  );
}

export default CardGroups;