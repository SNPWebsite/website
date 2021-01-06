import React, {Component} from 'react';
import "../CSS/Feature_videos_card.css";
import Featured_Videos from '../../../data/Featured_videos';

class Feature_videos_card extends Component{

    render(){

        return(

            <div className="feature_videos_card">
                <p id="feature_video_card_title">Featured Videos</p>
                <div className="container feature_container">
                
                    <div className="row feature_row justify-content-around">
                        {Featured_Videos.map( (videos, index, arr) =>{
                            if(index > arr.length-4){
                                return(

                                    <div className="card feature_card col-12 col-md-4">
                                        <div className="card-body">
                                            <a href={videos.link}>
                                                <img className="img-fluid feature_img" src={videos.thumbnail} alt="thumbnail"/>
                                                <p id="feature_video_title">
                                                    <span id="feature_video_name">{videos.name}</span>
                                                    &nbsp;
                                                    <span id="feature_video_date">{videos.date}</span>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
    
                                );
                            }
                            
                        } 
                        )}
                        
                    </div>
                </div>
                <p style={{textAlign:"center"}}><a  id="link_to_all_videos" href="/teachings">View all videos</a></p>
            </div>

        );

    }

}

export default Feature_videos_card;

