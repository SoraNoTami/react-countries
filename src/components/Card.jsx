import React from 'react';
import bootstrap from 'bootstrap';

export class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    // fromParent = () =>{
    //     let name = this.props.children;
    //     this.props.onClick(name);
    // }

    render() {
        return (
            <div className="card" style={{ width: 18 + 'rem' }}>
                <img className="card-img-top" src={this.props.flag}></img>
                <p> {this.props.flag}</p>
                <div className="card-body">
                    <p>Country: {this.props.name}</p>
                    <p>Capital: {this.props.capital}</p>
                    <p>Region: {this.props.region}</p>
                    <p>Population: {this.props.population}</p>
                </div>
            </div>
        )
    }

}