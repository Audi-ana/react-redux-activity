import React, {Component} from 'react'
import {connect} from 'react-redux'
import './counter.css'

class Counter extends Component{

    render(){
        return(
            <div className = 'counter'>
                <h1>{this.props.counter}</h1>
              <div className="buttonContainer">
                <button onClick={() => this.props.onIncrementCounter()}>+1</button>
                <button onClick={()=>this.props.onDecrementCounter()}>-1</button>
                <button onClick={()=>this.props.onAddCounter()}>+10</button>
                <button onClick={()=>this.props.onSubtractCounter()}>-10</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        counter: state.counter //can be accessed with this.props.counter
    }
}

const mapDispatchToProps = (dispatch)=>{
return{
    onIncrementCounter: () => dispatch({type:'INC_COUNTER'}),
    onDecrementCounter: () => dispatch({type:'DEC_COUNTER'}),
    onAddCounter: () =>dispatch({type:'ADD'}),
    onSubtractCounter: () => dispatch({type:"SUB"})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)