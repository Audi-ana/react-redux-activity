

//create inital state
const initalState = {
    counter: 10
}

//create reducer
const reducer = (state = initalState, action) =>{

    if(action.type === 'INC_COUNTER'){
        return{
            counter: state.counter + 1
        }
    }else if(action.type === 'DEC_COUNTER'){
        return{
            counter: state.counter - 1
        }
    }else if(action.type === 'ADD'){
        return{
            counter: state.counter + 10
        }
    }else if(action.type === "SUB"){
        return{
            counter: state.counter - 10
        }
    }
    return state
}


export default reducer