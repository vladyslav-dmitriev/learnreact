import React, {Component} from "react";
import {connect} from 'react-redux';

import User from '../components/User';
import Year from '../components/Year';

import setYearAction from '../actions/actionYear';
import setNameAction from '../actions/actionName';

import Name from '../components/Name';

class ReduxApp extends Component {
    render() {
        return (
            <div>
                <User user={this.props.user} />
                <Year year={this.props.year} setYear={this.props.setYearFunction} />
                <Name name={this.props.name} setName={this.props.setNameFunction} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userInfo.user,
        year: state.userInfo.year,
        name: state.userInfo.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setYearFunction: year => {
            dispatch(setYearAction(year))
        },
        setNameFunction: name => {
            dispatch(setNameAction(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);