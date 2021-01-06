import React, {Component} from 'react';
import '../CSS/home.css';
import c1_snp_image from '../../../images/vj.png';

class Card1_home extends Component{
    render(){

        return(

            <div className="container Card1">
                    <div className="row justify-content-around">
                        <div className="col-md-4 col-sm-4 col-xs-4 Card1_Quote align-self-start">
                            Selfless sacrifice is the language to understand the voices of LOVE<p> - <span style={{color: "#6236FF"}}>Sri Nitai Das</span></p>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 Card1_image">
                            <div className='Card1_snp_image'>          
                                <figure>                
                                <img className="img-fluid" src={c1_snp_image} alt='snp_image' id='card1_image'/>
                                </figure>    
                            </div>
                        </div>
                    </div>
                </div>

        );

    }
}

export default Card1_home;