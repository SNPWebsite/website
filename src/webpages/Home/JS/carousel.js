import React, {Component} from 'react';
import Testimonials from "../../../data/testimonials_home";
import "../CSS/carousel.css";
import testimonial_1 from "../../../images/vijay_sai.jpg";

class Testimonial_Carousel extends Component{
    constructor(props){
        super(props);
    }
    render(){

            return(
                
                <div className="Testimonials">
                {/* <div>{this.props.testimonials.join(",")}</div> */}
                <div className="container-fluid">
                <div id="carousel-testimonial" className="carousel slide" data-ride="carousel" data-interval="2000">
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-testimonial" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-testimonial" data-slide-to="1"></li>
                            <li data-target="#carousel-testimonial" data-slide-to="2"></li>
                        </ol>
                    <div className="carousel-inner row w-100 mx-auto justify-content-around" role="listbox">
                        {/* <!-- Indicators -->  */}
                        
                        {/* <!-- The slideshow --> */}
                    
                        <div className="carousel-item col-10 justify-content-around active">
                            <div>
                                <img src={testimonial_1} className="img-fluid mx-auto d-block testimonial_display_pic" alt="active"/>
                                <p className="testimonial_name">Vijay Sai</p>
                                <p className="testimonial_about">Data Science Intern, Express Scripts, IIT Guwahati</p>
                                <p className="testimonial">After attending these seminars, I have experienced significant difference in my productivity at work. The speaker’s words have really motivated me to successfully achieve a satisfactory work-life balance.</p>
                            </div>
                        </div>

                        { this.props.testimonials.map( (data) =>{                 //Testimonials
                            return(
                                
                                    <div className="carousel-item col-10 justify-content-around"> {// col-sm-6 col-md-4 col-lg-3 
                                    }
                                        <div>
                                            <img src={data.display_pic} className="img-fluid mx-auto d-block testimonial_display_pic"/>
                                            <p className="testimonial_name">{data.name}</p>
                                            <p className="testimonial_about">{data.about}</p>
                                            <p className="testimonial">{data.testimonial}</p>
                                        </div>    
                                    </div>
                            )
                            

                        })} 
                    </div>
                    {/* <!-- Left and right controls --> */}
                   
                    <a className="carousel-control-prev" href="#carousel-testimonial" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only">Previous</span> 
                    </a>
                    
                    <a className="carousel-control-next" href="#carousel-testimonial" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only">Next</span>
                    </a>
                   
    
                    
                </div>    
                </div> 
                </div>
            );
            
    
        }
       
    }


export default Testimonial_Carousel;

// <span className="sr-only">Previous</span> 
// <span className="sr-only">Next</span>