import React from "react";
import { Redirect } from "react-router-dom";
import {Nav,Navbar,Container} from 'react-bootstrap'
import SweetAlert from "react-bootstrap-sweetalert";
import logo from'./Images/logo.jpeg'



const _ = require("lodash");


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.name,
      board: [],
      boardItem: "",
      toggle: false,
      submit: true,
      logout: false,
      loggedInUserObj: {},
    };
  }

  onLogoutYes = () => {
    this.setState({ submit: false });
    this.setState({ toggle: true });
    const userObj = JSON.parse(
      localStorage.getItem(_.get(this.state.loggedInUserObj, "userName", ""))
    );
    userObj.isUserLoggedIn = false;
    localStorage.setItem(
      _.get(this.state.loggedInUserObj, "userName", ""),
      JSON.stringify(userObj)
    );
    localStorage.removeItem("appLoggedinUser","");
  };

  onLogout = () => {
    this.setState({
      logout: !this.state.logout,
    });
  };

  componentDidMount() {
    //const loggedInUserName = _.get(this.props.location, "state.userName", {});
    //const loggedInUserName = this.state.username
    //const loggedInUserName = localStorage.getItem("appLoggedinUser")

    this.setState({
      loggedInUserObj: this.props.loggedinUser,
    });
  }

  render() {
    const localUname = `${_.get(
      this.state.loggedInUserObj,
      "firstName",
      ""
    )} ${_.get(this.state.loggedInUserObj, "lastName", "")}`;

    return (
      <div>
          <h1 style={{textAlign:"center"}}>ONLINE ART GALLERY</h1>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <img src={logo} style={{height:"40px"}}/>
        <Navbar.Brand href="" style={{fontWeight:"bold",fontFamily:"cursive"}}></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          //gap between the navlink
            <Nav.Link href="/home"  style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>About</Nav.Link>
            <Nav.Link href="/product"style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Products</Nav.Link>
            <Nav.Link href="/profile"style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Profile</Nav.Link> 
            <Nav.Link href="/feedback"style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Feedback</Nav.Link>
            <Nav.Link href="/cart"style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Cart</Nav.Link>
            
            {/* <button
              // className="navbar-toggler"
              // type="button"
              // data-toggle="collapse"
              // data-target="#navbarResponsive"
              // aria-controls="navbarResponsive"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarResponsive"> */}
              <ul className="navbar-nav ml-auto">
                <li
                  className="nav-item active text-left"
                  onClick={this.onLogout}
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.onLogout}
                  >
                    LOGOUT
                  </button>
                </li>
              </ul>
            {/* </div> */}
            </Navbar.Collapse>
         </Container>
         </Navbar>
         {/* <h2>{this.state.loggedInUserObj.userName}</h2> */}
        {/* <div className="container">
          <h1 className="mt-4">HELLO {localUname}</h1>
          <p>Welcome to ART GALLERY</p>
        </div> */}
        {!this.state.submit ? <Redirect to={`/`} /> : null}
        {this.state.logout ? (
          <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={this.onLogoutYes}
            onCancel={this.onLogout}
            focusCancelBtn
          ></SweetAlert>
        ) : (
          ""
        )}

    </div>
    );
}
}
export default Header; 
