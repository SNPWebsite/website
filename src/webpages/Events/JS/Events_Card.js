import React, {Component} from 'react';
import '../CSS/_Events_Card.css';
//import {_upcoming_events} from '../../../data/events';

class Events_Card extends Component{

    constructor(props){
        super(props);
    }

    render(){
        var date_picker = [];
    //     if(this.props.card_title === "Upcoming Events"){
            
    //         date_picker.push(<select id="date_range_picker">
    //     <option value="x">01st June 2020 - 15th June 2020</option>
    //     <option value="y">15th June 2020 - 30th June 2020</option>
    // </select>);
    //     }
        
        var events_containers = [];
        var events_rows = [];
        this.props.events_data.map( (e_list, index) => {                 
            events_rows.push(
                <div className="events_card_col col-12 col-md-3">
                    <div className="events_card_card card">
                        <div className="card-body cb">
                            {/* <div className="event_img"> */}
                                <img className="img-fluid event_img" src={e_list.event_img} alt={e_list.event_img}/>
                            {/* </div> */}
                            <div className="event_details">
                                <p id="event_title">{e_list.event_title}</p>
                                <p id="event_desc">{e_list.event_desc}</p>
                                <hr id="event_card_hr"></hr>
                                <p id="event_date">{e_list.event_date}</p>
                                <div className="more_event_details">
                                    <p id="event_timings">{e_list.event_timings}</p>
                                    <a href="" id="event_details_link">Details &gt;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            //rows.push(<div className="col-0 col-md-1">&nbsp;</div>);
            if(index % 3 == 2){
                //rows.push(<div className="all_video_card col-0 col-md-1">&nbsp;</div>);
                events_containers.push(
                    <div className="events_card_row row justify-content-around">
                        {events_rows}
                    </div>

                );
                events_rows=[];
            }
        })
        if(events_rows.length>0){
            events_containers.push(<div className="events_card_row row justify-content-around">
                        {events_rows}
                        </div>);
        }

        return(
            <div className="events_c">
                <div className="events_card_title_section">
                    <p id="events_card_title">{this.props.card_title}</p>
                    {date_picker}
                </div>
                <div className="events_card container">
                    {events_containers}
                
                </div>
            </div>
        );

    }
}

export default Events_Card;

{/* <div className="events_card_row row justify-content-around">
                {
                    this.props.events_data.map((e_list)=>{
                        return(
                            
                               <div className="events_card_col col-12 col-md-3">
                                    <div className="events_card_card card">
                                        <div className="card-body cb">
                                            {/* <div className="event_img"> }
                                                <img className="img-fluid event_img" src={e_list.event_img} alt={e_list.event_img}/>
                                            {/* </div> }
                                            <div className="event_details">
                                                <p id="event_title">{e_list.event_title}</p>
                                                <p id="event_desc">{e_list.event_desc}</p>
                                                <hr id="event_card_hr"></hr>
                                                <p id="event_date">{e_list.event_date}</p>
                                                <div className="more_event_details">
                                                    <p id="event_timings">{e_list.event_timings}</p>
                                                    <a href="" id="event_details_link">Details &gt;</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                        );
                    })
                }
                </div> */}