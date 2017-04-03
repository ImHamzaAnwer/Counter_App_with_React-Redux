import React from "react";
import { connect } from "react-redux";
import Counter from "../Components/Counter.js";

class Main extends React.Component{
    render(){
        return (
            <div>
                <Counter count={this.props.count}/>
            </div>
        );
    }
}

export default connect((state)=>{
    return{
        count: state.counterReducer
    }
})(Main)