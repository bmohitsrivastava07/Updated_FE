// import { render } from '@testing-library/react';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Footer from './Footer'
import Header from './Header';
import Carousel from 'react-bootstrap/Carousel';
// import './Home.css';
import img_1 from './Images/img_2.jpeg';
import img_2 from './Images/WalkInThePark.jpeg';
import img_3 from './Images/img_3.jpg';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() {

        return (
            <div className='bgimg'>
                <Header  {...this.props}/>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img_1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img_2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img_3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
                <Footer />
            </div>
        )
    }

}
export default Home;

// 123 {this.props.loggedinUser.userName }