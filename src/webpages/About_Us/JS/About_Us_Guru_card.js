import React, {Component} from 'react';
import {_Guru_Card} from '../../../data/About_Us_Card';
import '../CSS/_About_Us_Guru_Card.css';
import About_Us_Guru_More from './About_Us_Guru_More';

class About_Us_Guru_Card extends Component{


    render(){

        return(

            <div className="about_us_guru_card container">
                
                    {
                        _Guru_Card.map((guru_card)=>{
                            return(
                                <div className="about_us_guru_row row">
                                    <div className="col-12 col-md-8 guru_card_data_col">
                                        <p id="about_us_guru_name">{guru_card.guru_name}</p>
                                        <p id="about_us_guru_quote">{guru_card.guru_quote}</p>
                                        <p id="about_us_guru_desc">{guru_card.guru_desc}</p>
                                        <a href="/more_about_guru"><button className="know_more_about_guru">KNOW MORE</button></a>
                                    </div>
                                    <div className="col-12 col-md-4 guru_card_img_col">
                                        <img className="img-fluid about_us_guru_img" src={guru_card.guru_img} alt={guru_card.guru_img}/>
                                    </div>
                                </div>
                            );
                        })
                    }
                
            </div>

        );

    }

}

export default About_Us_Guru_Card;