import React, {Component} from 'react';

export default class Year extends Component {
    constructor(props) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick(e) {
        return this.props.setYear(e.target.textContent)
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>1975</button>
                <button onClick={this.onButtonClick}>1991</button>
                <button onClick={this.onButtonClick}>2015</button>
                <p>This year has been chosen - {this.props.year}</p>
            </div>
        )

    }
}