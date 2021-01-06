import React, {Component} from 'react';
import './navbar.css';
import logo from '../../images/krishna_purple.jpg';
class NavBar extends Component{
    constructor(props){
        super(props);
        this.home = '';
        this.books = '';
        this.teachings = '';
        this.events = '';
        this.about_us = '';
    }
    render(){
        
        if(this.props.active_class === 'home'){
            this.home = ' navbar_active';
        } 
        else if(this.props.active_class === 'books'){
            this.books = ' navbar_active';
        } 
        else if(this.props.active_class === 'teachings'){
            this.teachings = ' navbar_active';
        } 
        else if(this.props.active_class === 'events'){
            this.events = ' navbar_active';
        } 
        else if(this.props.active_class === 'about_us'){
            this.about_us = ' navbar_active';
        } 
        return(
            
            
            <div className='navbar1'>
                <nav className='navbar navbar-toggleable-md navbar-light'>

                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className='logo'>
                        <img src={logo} alt='D' id='logo'/>
                    </div>

                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav ml-auto'>
                            <li className="nav-item"><a className="nav-link" href='/'><span className={'link_buttons'+this.home}>HOME</span></a></li>
                            <li className="nav-item"><a className="nav-link" href='/books'><span className={'link_buttons'+this.books}>BOOKS</span></a></li>
                            <li className="nav-item"><a className="nav-link" href='/teachings'><span className={'link_buttons'+this.teachings}>TEACHINGS</span></a></li>
                            <li className="nav-item"><a className="nav-link" href='/events'><span className={'link_buttons'+this.events}>EVENTS</span></a></li>
                            <li className="nav-item"><a className="nav-link" href='/about'><span className={'link_buttons'+this.about_us}>ABOUT US</span></a></li>
                        </ul>
                    </div>

                </nav>
            </div>
           
            
        );


    }
}

export default NavBar;