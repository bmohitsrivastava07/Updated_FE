import React from "react";
import { useCart } from 'react-use-cart';
import Swal from "sweetalert2";
import './Card.css'
const Card = (props) => {
    const { addItem } = useCart();

    
    const showAlert = () => {
        addItem(props.item)
        Swal.fire({
            title: "Success",
            text: "Product Added To Cart Successfully!!!",
            confirmButtonText: "Ok!",
        }, function () {
            window.location.reload();
        });
        setTimeout(function () {
            window.location.reload();
        }, 9000);
    }

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 img-fluid" >
                <img src={props.img} className="card-img-top img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Rs. {props.price}</p>
                    <button className="btn btn-success" onClick={showAlert}>ADD</button>
                </div>
            </div>
        </div>
    )
}
export default Card; 
