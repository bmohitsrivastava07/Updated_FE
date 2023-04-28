import { Card, Form, Button, Col, Row, Container } from "react-bootstrap";
import React from 'react';
import RatingStars from "./Widgets/RatingStars";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";

class FeedBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
  

    showAlert = () => {

        Swal.fire({
            title: "Success",
            text: "Feedback saved Successfully!!!",
            confirmButtonText: "Ok!", 
          },  
          setTimeout(function() {
            window.location.reload();
          }, 9000))
    }
    render() {
        return (
            <>
                <Header {...this.props} />
                <div className="page-header">
                    <h2 className="text-dark" style={{ textAlign: "center", paddingTop: "5%" }}>Feedback</h2>
                </div>
                <Container className="justify-content-md-center col-5 pt-10">
                    <Row >
                        <Col><Card style={{ border: "1px solid black" }}>
                            <Form>
                                <Col>
                                <Form.Group controlId="formBasicName" style={{paddingTop:"5%"}}>
                                        <Form.Label>Email ID</Form.Label>
                                        <Form.Control value={this.props.loggedinUser.Email_Id} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control value={this.props.loggedinUser.userName} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control value={`${this.props.loggedinUser.firstName} ${this.props.loggedinUser.lastName}`} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicTextField">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Col>
                                <RatingStars />
                                <div className="text-center">

                                    <Button className="text-center float-center" variant="success" style={{ marginTop: "10px", marginBottom: "10px" }} type="button" onClick={this.showAlert}>Submit
                                    </Button>

                                </div>
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
export default FeedBack;