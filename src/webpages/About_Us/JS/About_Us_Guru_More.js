import React, {Component} from 'react';
import NavBar from '../../Navbar/navbar';
import FooterBar from '../../FooterBar/FooterBar';
import '../CSS/_About_Us_Guru_More.css';


class About_Us_Guru_More extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="more_about">
                <NavBar active_class='about_us'/>
                <div className="more_about_card">
                    <div className="more_about_container container">
                        <div className="more_about_row1 row">
                            <div className="more_about_img_col col-12 col-md-3">
                                <img className="img-fluid" id="more_about_guru_img" src={this.props.img} alt="guru_img"/>
                            </div>
                            <div className="more_about_blank_col col-12 col-md-1">
                                
                            </div>
                            <div className="more_about_data_col col-12 col-md-8">
                                <p id="more_about_row1_title">{this.props.title}</p>
                                <p id="more_about_row1_quote">{this.props.quote}</p>
                            </div>
                        </div>
                        <div className="more_about_row2 row">
                            <div className="more_about_row2_col col-12">
                                <p id="more_about_row2_desc">{this.props.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBar/>
            </div>


        );
    }
}

export default About_Us_Guru_More;