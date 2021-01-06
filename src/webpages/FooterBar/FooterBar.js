import React, {Component} from 'react';
import './FooterBar.css';


class FooterBar extends Component{
    render(){

        return(

            <div className="footer">
                <p id="footer_text">Let's Connect</p>
                <p id="footer_contact">+91-9903405827 | +91-8017616682 | dasosmi@gmail.com</p>
                <p id="footer_address">3C, Albert road, Kolkata, India, Pin code to be added</p>
                <p style={{textAlign:"center", color:"#6236FF"}}>
                    <a id="footer_social_media" href="https://www.facebook.com/srinitaidasofficial/">Facebook&nbsp;</a>|
                    <a id="footer_social_media" href="https://twitter.com/SriNitaiDas1">&nbsp;Twitter&nbsp;</a>|
                    <a id="footer_social_media" href="https://www.youtube.com/channel/UCrpAkFGlyz5y_hQQnR1hH1Q">&nbsp;Youtube&nbsp;</a>
                </p>
            </div>

        );

    }
}

export default FooterBar;