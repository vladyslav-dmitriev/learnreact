import './MyApp.css';
import React, {Component} from "react";

function sayHi(name) {
    return 'Hi, ' + name;
}

class MyApp extends Component {
    render() {
        return (
            <div>
                <div>{sayHi('Vlad')}</div>
            </div>
        )
    }
}

export default MyApp;