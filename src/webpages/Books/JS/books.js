import React, {Component} from 'react';
import NavBar from '../../Navbar/navbar';
import FooterBar from '../../FooterBar/FooterBar';
import Books_Card from './Books_Card';
import Testimonials_Carousel from '../../Home/JS/carousel';
import {Book_Testimonials} from "../../../data/Books";

class Books extends Component{

    render(){

        return(

            <div className="Books">
                <NavBar active_class='books'/>
                <Books_Card/>
                <Testimonials_Carousel testimonials={Book_Testimonials}/>
                <FooterBar/>
            </div>

        );

    }

}


export default Books;