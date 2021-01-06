import book_image from '../images/secret_book.jpg';


import user1 from "../images/udit_singh.jfif";
import user2 from "../images/tanujay_saha.jfif";

const Book_Testimonials = 
[

    {
        "id": 1,
        "display_pic": user1,
        "name":"Udit Singh",
        "about":"L&T Infotech, Denmark; IIM Kolkata; IIT Roorkee",
        "testimonial":"The author, Sri Nitai Das has an art of injecting the message in a simple way by connecting with real life examples that we experience in our daily life"
    },

    {
        "id": 2,
        "display_pic":user2,
        "name":"Tanujay Saha",
        "about":"pursuing PhD from Princeton University; B.Tech, ECE, IIT KGP",
        "testimonial":"Every moment it has been a learning experience. The way he teaches and also exemplifies in his own life the applicability of spiritual principles is actually a complete journey of self-realisation."
    }

    

];




const _Books = [

    {
        "id":1,
        "title":"Secret",
        "subtitle":"Sutras for a succesfull, stress free and sacred",
        "bookdesc":"Book description to be added \
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "bookimage":  book_image
    }

];


export {_Books, Book_Testimonials};
