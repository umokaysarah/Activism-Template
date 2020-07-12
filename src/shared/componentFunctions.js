import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

function renderMedia(media){

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


export { renderMedia };
