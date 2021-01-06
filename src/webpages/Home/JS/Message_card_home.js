import React, {Component} from 'react';
import '../CSS/home.css';
import message_img from "../../../images/mayapur_yatra.JPG";

class Message_card_home extends Component{
    render(){

        return(

            <div className="Message">
                <div className="container Message_card_home">
                    <div className='col-12 justify-content-around'>
                        <img className="img-fluid message_card_img" src={message_img} alt="message_img" id="message_img"/>
                    </div>
                </div>
                </div>

        );

    }
}

export default Message_card_home;