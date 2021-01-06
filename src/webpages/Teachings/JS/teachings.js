import React, {Component} from 'react';
import NavBar from '../../Navbar/navbar';
import All_Videos_card from './All_Videos_Card';
import FooterBar from '../../FooterBar/FooterBar';

class Teachings extends Component{

    render(){

        return(
            <div>
                <NavBar active_class='teachings'/>
                <All_Videos_card/>
                <FooterBar/>
            </div>
        );

    }

}

export default Teachings;