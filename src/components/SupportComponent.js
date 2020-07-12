import React, { Component } from 'react';
import { SUPPORT } from '../shared/Support';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { renderMedia } from '../shared/componentFunctions'


class Support extends Component{

    constructor(props){
        super(props);

        this.state={
            support: SUPPORT,
            currentInfo: null
        };
        this.infoSelect = this.infoSelect.bind(this);
    }

infoSelect(infoSelected){
        this.setState(state => ({
            currentInfo: infoSelected
          }));
          
}

renderInfo(){
    if(this.state.currentInfo != null)
    return(
        <div>
            {renderMedia(this.state.currentInfo)}
        </div>
    );

}

renderHeader(header){

    const Header = header.map((header)=>{
        return(
            <div>
                <div className="list-group-flush">
                <li className="list-group-item" 
                   onClick={this.infoSelect.bind(this, header.info)}>
                    {header.title}
                </li>
                </div>
            </div>
        );


    });
    return(       
        <div className="list-group list-group-flush">
            {Header}
        </div>
    );
}

render(){
        return(
            <div className="container text-center">
                {this.renderHeader(this.state.support)}
                
                <div>
                    {this.renderInfo()}
                </div>
            </div>
        );

}
}

export default Support;