import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyApp from './MyApp';
import ReduxApp from './containers/ReduxApp';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const store = createStore(rootReducer);

// ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

ReactDOM.render(<MyApp />, document.getElementById('myroot'));

function tick() {
    const elem = (
        <div>
            <div>{new Date().toLocaleTimeString()}</div>
        </div>
    );
    // ReactDOM.render(elem, document.getElementById('root'));
}

setInterval(tick, 1000);


/**/

function Welcome(props) {
    return (
        <div className="profile__name">Hello, {props.name}</div>
    );
}

function Location(props) {
    return (
        <div className="profile__location">
            <div className="profile__city">{props.city}</div>
            <div className="profile__country">{props.country}</div>
        </div>
    );
}

function Hi() {
    return (
        <div>
            <div className="profile">
                <Welcome name="Sara" />
                <div className="profile__age">18</div>
                <Location city="Kiev" country="Ukraine" />
            </div>
        </div>
    )
}

// ReactDOM.render(<Hi/>, document.getElementById('props'));

function Clock(props) {
    const value = props.value;
        return (
            <div>
                <p>Таймер:</p>
                <p>
                    <span>{Math.round(value/INTERVAL/60/60)} : </span>
                    <span>{Math.round(value/INTERVAL/60)} : </span>
                    <span>{Math.round(value/INTERVAL)} . </span>
                    <span>{value % INTERVAL}</span>
                </p>
            </div>
        )
}

// class Clock extends Component {
//     constructor(props) {
//         super(props);
//         this.value = this.props.value;
//     }
//     render() {
//         const value = this.props.value;
//         return (
//             <div>
//                 <p>Таймер:</p>
//                 <p>
//                     <span>{Math.round(value/INTERVAL/60/60)} : </span>
//                     <span>{Math.round(value/INTERVAL/60)} : </span>
//                     <span>{Math.round(value/INTERVAL)} . </span>
//                     <span>{value % INTERVAL}</span>
//                 </p>
//             </div>
//         )
//     }
// }

/**/

const INTERVAL = 100;

class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    increment() {
        this.setState({value: this.state.value + 1});
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <Clock value={this.state.value} />
            </div>
        );
    }
}

// ReactDOM.render(<Timer/>, document.getElementById('root'));


/* counter */

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        if (this.state.count <= 0) {
            this.setState({ count: 0 });
        } else {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }
    }


    decrement() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <div>{this.state.count < 3 ? 'слишком мало' : 'сойдет'}</div>
                <button onClick={this.increment}>-</button>
                <button onClick={this.decrement}>+</button>
            </div>
        )
    }
}

// ReactDOM.render(<Counter />, document.getElementById('counter'));

/* users */

var users = [
    {
        id: 27,
        name: 'Вася'
    }, {
        id: 45,
        name: 'Маша'
    }, {
        id: 78,
        name: 'Петя'
    }
];

function UsersList(props) {
    const arr = props.arr;
    return (<ul>{arr.map((user) => <li key={user.id} id={user.id}>name: {user.name}</li>)}</ul>)
}

// ReactDOM.render(<UsersList arr={users} />, document.getElementById('users'));

/* form */

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: '', language: 'ua'};

        this.onSubmit = this.onSubmit.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onLanguage = this.onLanguage.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        alert(this.state.login + ', добро пожаловать! Ваш пароль ' + this.state.password);
    }

    onInput(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    onLanguage(e) {
        this.setState({
            language: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Логин:
                    <input name="login" type="text" value={this.state.login} onChange={this.onInput} />
                </label>
                <label>
                    <select value={this.state.language} onChange={this.onLanguage}>
                        <option value="ru">Русский</option>
                        <option value="ua">Украинский</option>
                        <option value="en">Английский</option>
                    </select>
                </label>
                <label>
                    Пароль:
                    <textarea name="password" type="text" value={this.state.password} onChange={this.onInput} />
                </label>
                <input type="submit" value="Отправить"/>
            </form>
        )
    }
}

// ReactDOM.render(<Form/>, document.getElementById('form'));

/**/

const MAX_SPEED = 60;

function convertToMph(kph) {
    return kph / 2
}

function convertToKph(mph) {
    return mph * 2
}

class SpeedSetter extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onSpeedChange(e.target.value);
    }

    render() {
        const speed = this.props.speed;
        return (
            <div>
                <input type="text" value={speed} onChange={this.onChange} />
            </div>
        )
    }
}

class SpeedRadar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 0,
            unit: 'kph'
        }

        this.onChangeKph = this.onChangeKph.bind(this);
        this.onChangeMph = this.onChangeMph.bind(this);

    }

    onChangeKph(speed) {
        this.setState({unit: 'kph', speed});
    }

    onChangeMph(speed) {
        this.setState({unit: 'mph', speed});
    }

    render() {
        const speed = this.state.speed;
        const result = speed > 60 ? 'Скорость в Км/ч превышена!' : 'Скорость в Км/ч не превышена.'
        return (
            <div>
                <SpeedSetter speed={speed} onSpeedChange={this.onChangeKph} />
                <SpeedSetter speed={speed} onSpeedChange={this.onChangeMph} />
                <div>{result}</div>
            </div>
        )
    }
}

// ReactDOM.render(<SpeedRadar />, document.getElementById('speed'));

/* mytest */

class Child extends Component {
    constructor(props) {
        super(props);

        this.onChangeChild = this.onChangeChild.bind(this);
    }

    onChangeChild(e) {
        this.props.onChangeParent(e.target.value);
    }

    render() {
        let access = this.props.access;
        if (access) {
            console.log(`${access} - Доступ разрешен`);
        } else {
            console.log(`${access} - Доступ запрещен`);
        }
        return (
            <input type="text" value={this.props.value} onChange={this.onChangeChild} />
        )
    }
}

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            access: false
        }

        this.onChangeParent = this.onChangeParent.bind(this);
    }

    onChangeParent(value) {
        this.setState({
            value: value
        })
        if (value > 50) {
            this.setState({
                access: true
            })
        } else {
            this.setState({
                access: false
            })
        }

    }

    render() {
        return (
            <div>
                <Child access={this.state.access} value={this.state.value} onChangeParent={this.onChangeParent} />
            </div>
        )
    }
}

// ReactDOM.render(<Parent />, document.getElementById('mytest'));


/* shop */

var data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStocked: false,
            isSearch: ''
        }
        this.onChangeStocked = this.onChangeStocked.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeStocked() {
        this.setState({
            isStocked: !this.state.isStocked
        })
    }

    onChangeSearch(search) {
        this.setState({
            isSearch: search
        })
    }

    render() {
        return (
            <div>
                <SearchBar onChangeSearch={this.onChangeSearch} onChangeStocked={this.onChangeStocked} />
                <ProductTable isSearch={this.state.isSearch} isStocked={this.state.isStocked} />
            </div>
        )
    }
}

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.onChangeStocked = this.onChangeStocked.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeStocked(e) {
        this.props.onChangeStocked();
    }

    onChangeSearch(e) {
        this.props.onChangeSearch(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.isSearch} onChange={this.onChangeSearch} />
                <label>
                    <input type="checkbox" checked={this.props.isStocked} onChange={this.onChangeStocked} />
                    Only show products in stock
                </label>
            </div>
        )
    }
}

class ProductTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isStocked = this.props.isStocked,
              isSearch = this.props.isSearch,
              searchRegExp = new RegExp(isSearch,'i');

        const stockedList = data.map((item, index) => {
            if (item.name.search(searchRegExp) === -1) {
                return
            }
            if (isStocked && !item.stocked) {
                return
            }
            return <ProductRow key={index} name={item.name} price={item.price} />
        });

        return (
            <div>
                <div>
                    <b>Name </b>
                    <b>Price</b>
                </div>
                <ProductCategoryRow title="Sporting Goods" />
                {stockedList}
            </div>
        )
    }
}

class ProductCategoryRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <b>{this.props.title}</b>
        )
    }
}

class ProductRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li><span>{this.props.name} </span><span>{this.props.price}</span></li>
        )
    }
}

ReactDOM.render(<FilterableProductTable />, document.getElementById('shop'));


/**/

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Contacts = () => (
    <div>
        <h2>Contacts</h2>
    </div>
)

class Navigation extends Component {

    render() {
        return (
            <BrowserRouter history={history}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                    <hr/>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contacts" component={Contacts} />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Navigation />, document.getElementById('navigation'));

/* redux */

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>, document.getElementById('redux'));