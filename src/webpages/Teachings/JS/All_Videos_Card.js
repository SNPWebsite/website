import React, {Component} from 'react';
import '../CSS/_All_Videos_Card.css';
import All_Videos from '../../../data/Featured_videos';


class All_Videos_Card extends Component{

    render(){
        var containers = [];
        var rows = [];
        All_Videos.map( (videos, index, array) => {
            if(index%3!=0){
                rows.push(<div className="all_video_card col-0 col-md-1">&nbsp;</div>); 
            }                   
                               
            rows.push(
                <div className="card all_video_card col-12 col-md-3 justify-content-around">
                <div className="card-body">
                    <a href={videos.link}>
                        <img className="img-fluid all_video_img" src={videos.thumbnail} alt="thumbnail"/>
                        <p id="all_video_title">
                            <span id="all_video_name">{videos.name}</span>
                            &nbsp;
                            <span id="all_video_date">{videos.date}</span>
                        </p>
                    </a>
                </div>
                </div> 
            );
            //rows.push(<div className="col-0 col-md-1">&nbsp;</div>);
            if(index % 3 == 2){
                //rows.push(<div className="all_video_card col-0 col-md-1">&nbsp;</div>);
                containers.push(
                    <div className="row all_video_row">
                        {rows}
                    </div>

                );
                rows=[];
            }
        })
        if(rows.length>0){
            containers.push(<div className="row all_video_row">
                            {rows}
                            </div>);
        }
        
        return(

            <div className="all_videos_card">
                <p id="all_video_card_title">All Videos</p>
                <div className="container all_video_con text-center">
                    {containers}
                
                </div>
            </div>

        );

    }

}

export default All_Videos_Card;






{/* <div className="row all_video_row">

{   
    
    containers.map((data) => {
        //<div className="row all_video_row">
        
        data.map((video) => {
            return(

                <div className="card all_video_card col-12 col-md-4 justify-content-around">
                <div className="card-body">
                    <a href={video.link}>
                        <img className="img-fluid all_video_img" src={video.thumbnail} alt="thumbnail"/>
                        <p id="all_video_title">
                            <span id="all_video_name">{video.name}</span>
                            &nbsp;
                            <span id="all_video_date">{video.date}</span>
                        </p>
                    </a>
                </div>
                </div>  
                
            );
        })
         
        //</div>
    })
        

    
}

</div> */}