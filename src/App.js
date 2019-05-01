import React,{Component} from 'react';
import './App.css';
import Counter from './counter';

class App extends Component {
  render(){
    return(
     <div className="body">
     <h1>Counter</h1>
    <Counter/>
    </div>
    )
  }
    
}

export default App;
