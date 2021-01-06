import React, {Component} from 'react';
import NavBar from '../../Navbar/navbar';
import FooterBar from '../../FooterBar/FooterBar';
import Upcoming_Events from './Events_Card';
import Events_Card from './Events_Card';
import {_upcoming_events} from '../../../data/events';
import {_previous_events} from '../../../data/events';
class Events extends Component{
    render(){
        return(

            <div className="events">
                <NavBar active_class='events'/>
                <Events_Card card_title="Upcoming Events" events_data={_upcoming_events}/>
                <Events_Card card_title="Previous Events" events_data={_previous_events}/>
                <FooterBar/>
            </div>

        );
    }
}

export default Events;