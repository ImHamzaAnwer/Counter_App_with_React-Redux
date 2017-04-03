import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CounterActions} from '../Store/actions/index.js';

class Counter extends Component{
    _add(){
        var {dispatch} = this.props;
        dispatch(CounterActions.Add());
    }

    render(){
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this._add.bind(this)}>Add </button>
            </div>
        );
    }
}

export default connect()(Counter);