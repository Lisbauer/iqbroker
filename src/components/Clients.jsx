import React from 'react'
import './clients.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Clientes = () => {
  return (
    <div className='clients_container'>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img style={{width:"400px"}} src="./images/client1.png" alt="client image" />
        </div>
        <div>
          <img  style={{width:"400px"}}  src="./images/client3.png" alt="client image" />
        </div>
        <div>
          <img  style={{width:"400px"}}  src="./images/client4.png" alt="client image" />
        </div>
        <div>
          <img  style={{width:"400px"}} src="./images/client5.jpg" alt="client image" />
        </div>
        <div>
          <img  style={{width:"400px"}}  src="./images/client6.jpg" alt="client image" />
        </div>
      </Carousel>
    </div>
  );
};

export default Clientes;