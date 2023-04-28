// import { render } from '@testing-library/react';
// import { faHomeUser } from '@fortawesome/free-solid-svg-icons';
// import Form from 'react-bootstrap/Form';
import React from 'react'
import Footer from './Footer'
import Header from './Header';
// import './Home.css';
import { Card, Form, Button, Col, Row, Container } from "react-bootstrap";

class Profile extends React.Component {

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         username: this.props.location.state.userName,
  //     };
  //   }
  render() {

    // const username = localStorage.getItem("appLoggedinUser")
    // const firstname = localStorage.getItem("firstName")
    // const lastname = localStorage.getItem("lastName")

    // return (
    // <>
    //  <Header  {...this.props} />
    {/* <div>
                        <h2>Details <br></br> 
                        {localStorage.getItem("appLoggedinUser") }<br></br></h2>
                        <h2>{localStorage.getItem("")}</h2>
                        <h2>{localStorage.getItem("")}</h2>
                        <h2>{}</h2>
                        <h2>{}
                   </div>  */}

    {/* const password = {localStorage.getItem("")} */ }

    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>User Name</Form.Label>
    //     <Form.Control type="text" value={this.props.loggedinUser.userName} />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>First Name</Form.Label>
    //     <Form.Control type="Text"  value ={this.props.loggedinUser.firstName} />
    //   </Form.Group>


    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Last Name</Form.Label>
    //     <Form.Control type="Text" value={this.props.loggedinUser.lastName} />
    //   </Form.Group>
    {/* 
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group> */}
    {/* </Form> */ }

    {/* <Footer /> */ }
    // </>
    // )
    // }




    return (
      <>
        <Header {...this.props} />
        <div className="page-header">
          <h2 className="text-dark" style={{ textAlign: "center", paddingTop: "2px" }}>Details</h2>
        </div>
        <Container className="justify-content-md-center col-5">
          <Row >
            <Col><Card style={{ border: "1px solid black" }}>
              <Form>
                <Col>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>USER NAME:</Form.Label>
                    <Form.Control value={this.props.loggedinUser.userName} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicTextField">
                    <Form.Label>FIRST NAME:</Form.Label>
                    <Form.Control value={this.props.loggedinUser.firstName} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicTextField">
                    <Form.Label>LAST NAME:</Form.Label>
                    <Form.Control value={this.props.loggedinUser.lastName} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control value={this.props.loggedinUser.Email_Id} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicTextField">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control value={this.props.loggedinUser.phoneNumber} />
                  </Form.Group>
                </Col>
              </Form>
            </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );

  }
}
export default Profile;


