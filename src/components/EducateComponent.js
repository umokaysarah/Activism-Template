import React, { Component } from 'react';
import { BOOKS } from '../shared/EducateResources/books';
import { MOVIES } from '../shared/EducateResources/movies';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';



class Educate extends Component{

    constructor(props){
        super(props);

        this.state={
            books: BOOKS,
            movies: MOVIES,
            currentInfo: null,
            currentInfoType: 99
        };
        this.infoSelect = this.infoSelect.bind(this);

      }

infoSelect(infoSelected, renderType){
    this.setState(state => ({
        currentInfo: infoSelected
      }));
      this.setState(state => ({
        currentInfoType: renderType
      }));
}

renderInfo(){
    if(this.state.currentInfoType === 1)
    return(
        <div>
            {this.renderBooks(this.state.currentInfo)}
        </div>
    );

}

renderBooks(books){

    const Books = books.map((book)=>{
        const linkList = book.links.map((link)=>{
            return(
                <div>
                <a href={link.url}>{link.name}</a>
            </div>
            );
        });
        return(
            <Card>
                <CardBody>
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle text-muted mb-2">{book.author}</h6>
                    <h6 className="card-subtitle text-muted">{book.date}</h6>
                    <div className="row align-items-center">
                        <div className="col-sm">
                            <img src={book.image} className="card-img mt-3 mb-3" />
                        </div>
                        <div className="col-sm">
                            <p>{book.description}</p>
                            {linkList}
                        </div>
                    </div>
                </CardBody>
            </Card>
        );

    });
    return(
        <div>{Books}</div>
    );
}



render(){
    return(
        <div>
            <div className="container text-center">
                <div className="list-group list-group-flush mb-4">
                    <li className="list-group-item" 
                    onClick={this.infoSelect.bind(this, this.state.books, 1)}>
                    Books
                    </li>
                    <li className="list-group-item"
                    onClick={this.infoSelect.bind(this, this.state.movies, 1)}
                    >Movies/Shows</li>
                    <li className="list-group-item">Podcasts</li>
                    <li className="list-group-item">Current Events</li>
                </div>
                <div>
                    {this.renderInfo()}
                </div>
            </div>
        </div>
    );
}

}

export default Educate;