import React, {Component} from 'react';
import '../CSS/_About_Us_Institution_Card.css';
import { _Guru_Institution } from '../../../data/About_Us_Card';

class About_Us_Institution_Card extends Component{
    render(){
        return(

            <div className="about_us_institution_card container">
                {
                        _Guru_Institution.map((institution_card)=>{
                            return(
                                <div className="about_us_institution_row row">
                                    <div className="col-12 col-md-4 institution_card_img_col">
                                        <img className="img-fluid about_us_institution_img" src={institution_card.institution_img} alt={institution_card.institution_img}/>
                                    </div>
                                    <div className="col-12 col-md-8 institution_card_data_col">
                                        <p id="about_us_institution_name">{institution_card.institution_name}</p>
                                        <p id="about_us_institution_quote">{institution_card.institution_quote}</p>
                                        <p id="about_us_institution_desc">{institution_card.institution_desc}</p>
                                        <a href="/more_about_institution"><button className="know_more_about_institution">KNOW MORE</button></a>
                                    </div>
                                    
                                </div>
                            );
                        })
                    }
                
            </div>

        );
    }
}

export default About_Us_Institution_Card;