import React, { Component } from 'react';
import { EDUCATE } from '../shared/Educate';
import { renderMedia } from '../shared/componentFunctions'



class Educate extends Component{

    constructor(props){
        super(props);

        this.state={
            educate: EDUCATE,
            currentInfo: null
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
        <div>
            {Header}
        </div>
    );
}


render(){
    return(
        <div className="container text-center">
                {this.renderHeader(this.state.educate)}
                
                <div>
                    {this.renderInfo()}
                </div>
            </div>
    );
}

}

export default Educate;