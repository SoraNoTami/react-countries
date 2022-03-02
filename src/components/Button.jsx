import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    fromParent = () => {
        let name = this.props.children;
        this.props.onClick(name);
    }

    render() {
        return (
            <div>
                <button onClick={this.fromParent}>{this.props.children}</button>
            </div>
        )
    }

}