import React, {Component} from 'react';

export default class Name extends Component {
    constructor(props) {
        super(props);

        this.setName = this.setName.bind(this);
    }

    setName(e) {
        return this.props.setName(e.target.value);
    }

    render() {
        return(
            <div>
                <input type="text" value={this.props.name} onChange={this.setName} />
                <p>Новое имя: {this.props.name}</p>
            </div>
        )
    }
}