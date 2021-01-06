import React, {Component} from 'react';
import NavBar from '../../Navbar/navbar';
import FooterBar from '../../FooterBar/FooterBar';
import About_Us_Guru_Card from './About_Us_Guru_card';
import About_Us_Institution_Card from './About_Us_Institution_Card';

class About_Us extends Component{

    render(){

        return(

            <div className="About_Us">
                <NavBar active_class='about_us'/>
                <About_Us_Guru_Card/>
                <About_Us_Institution_Card/>
                <FooterBar/>
            </div>

        );

    }


}

export default About_Us;