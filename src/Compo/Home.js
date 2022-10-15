// import React from 'react'
// import '../App.css';
// const Home = () => {
//   return (
//     <div className='hme'>
//         <h1>BURGER WEEK</h1>
//     </div>
//   )
// }

// export default Home

import Card from 'react-bootstrap/Card';
import A from '../Imgs/A4.png';
import '../App.css'
import  Nav  from '../Compo/Nav';
function Home() {
  return (
    <div className='hme'>
   <Nav/>
    <Card className="bg-bright text-dark">
    
      <Card.Img src={A} alt="Card image" />
      
      <Card.ImgOverlay>
      <Card.Text className='h44'>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS
        {/* <p className='h44'>IT IS A GOOD TIME FOR THE GREAT TASTE BURGERS</p> */}
      </Card.Text>
        <Card.Title >
       <h1 className='h11'>BURGER</h1>
       <h2 className='h22'>WEEK</h2>
        </Card.Title>
        
       
      </Card.ImgOverlay>
    </Card>
    </div>
  );
}

export default Home;