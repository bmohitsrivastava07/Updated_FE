// import { identity } from 'lodash';
import React from 'react';
import Card from './Card';
import data from './data';
import Footer from './Footer';
import Header from './Header';
import './Product.css';
class Product extends React.Component {

    render() {
        return (
            <>
                <Header {...this.props}/>
                <h1 className='text-center mt-3'>All Items</h1>
                <section className='py-4 container'>
                    <div className='row justify-content-center'>
                        {data.list.map((item, index) => {
                            return (
                                <Card className="click" img={item.img} name={item.name} price={item.price} item={item} key={index} />
                            )
                        })}

                    </div>
                </section>
                <Footer />
            </>
        )
    }
}
export default Product;