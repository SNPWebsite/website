import React, {Component} from 'react';
import '../CSS/home.css';
import NavBar from '../../Navbar/navbar';
import Card1_home from './Card1_home';
import Message_card_home from './Message_card_home';
import Testimonial_Carousel from "./carousel";
import Feature_videos_card from "./Feature_videos_card";
import FooterBar from '../../FooterBar/FooterBar';
import Testimonials from "../../../data/testimonials_home";


class Home extends Component{
    render(){

        return(
            <div>
                <NavBar active_class='home'/>
                <Card1_home/>
                <Message_card_home/>                
                <Testimonial_Carousel testimonials={Testimonials}/>
                <Feature_videos_card/>
                <FooterBar/>
            </div>
        );


    }
}

export default Home;
