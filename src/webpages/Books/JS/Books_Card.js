import React, {Component} from 'react';
import '../CSS/_Books_Card.css';
import {_Books} from '../../../data/Books';



class Books_Card extends Component{

    render(){

        return(

            <div className="Books_Card container">
                {
                    _Books.map( (book) => {
                        return(
                            <div className="row books_card_row">
                                <div className="col-12 col-md-7 books_card_data_col justify-content-around">
                                    <div className="books_card_book_details">
                                        <p id="books_card_book_title">{book.title.toUpperCase()}</p>
                                        <p id="books_card_book_subtitle">{book.subtitle}</p>
                                        <p id="books_card_book_bookdesc">{book.bookdesc}</p>
                                        <form method="post" action="">
                                            <input type="hidden" name="book_id" value={book.id}/>
                                            <input id="books_buy_button" type="submit" name="buy" value="BUY"/>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5 books_card_img_col">
                                    <img className="img-fluid books_card_book_img" src={book.bookimage} alt="book_thumbnail"/>
                                </div>    
                            </div>
                        );

                    }

                    )
                }
            </div>

        );

    }

}

export default Books_Card;