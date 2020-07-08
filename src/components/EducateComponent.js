import React, { Component } from 'react';
import { BOOKS } from '../shared/EducateResources/books';
import { MOVIES } from '../shared/EducateResources/movies';
import { PODCASTS } from '../shared/EducateResources/podcasts';
import { CURRENTEVENTS } from '../shared/EducateResources/current';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';



class Educate extends Component{

    constructor(props){
        super(props);

        this.state={
            books: BOOKS,
            movies: MOVIES,
            podcasts: PODCASTS,
            currentEvents: CURRENTEVENTS,
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
            {this.renderMedia(this.state.currentInfo)}
        </div>
    );

}

renderMedia(media){

    const Media = media.map((media)=>{
        const linkList = media.links.map((link)=>{
            return(
                <div>
                <a href={link.url}>{link.name}</a>
            </div>
            );
        });
        return(
            <Card>
                <CardBody>
                    <h5 className="card-title">{media.title}</h5>
                    <h6 className="card-subtitle text-muted m-2">{media.creator}</h6>
                    <h6 className="card-subtitle text-muted">{media.date}</h6>
                    <div>
                        <div className="">
                            <img src={media.image} className="card-img mt-3 mb-3" />
                        </div>
                        <div className="ml-3 mr-3">
                            <p>{media.description}</p>
                            {linkList}
                        </div>
                    </div>
                </CardBody>
            </Card>
        );

    });
    return(
        <div>{Media}</div>
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
                    <li className="list-group-item"
                    onClick={this.infoSelect.bind(this, this.state.podcasts, 1)}
                    >Podcasts</li>
                    <li className="list-group-item"
                    onClick={this.infoSelect.bind(this, this.state.currentEvents, 1)}
                    >Current Events</li>
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