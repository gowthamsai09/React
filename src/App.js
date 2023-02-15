import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/class_components';
import { Greets } from './components/properties_function';
import Welcomes from './components/props_inclass';
import Message from './components/state_component';
import Counter from './components/counter(ststate)';
import FunctionOnclick from './components/funEventOnclick';
import ClassClick from './components/ClassClick';
import Eventbind from './components/Eventbind';
import Parentcomponent from './components/Methods_as_props/Parentcomponent';
function App() {
    return (
         <div className = "App" >
            <Parentcomponent />
            {/* <Eventbind /> */}
            {/* <ClassClick /> */}
            {/* <FunctionOnclick /> */}
            {/* <Counter> </Counter>
            <Greet /> */}
            {/* <Greets
            name= "Gowtham" heroname="Batman">
              <p> This is children props</p>  
            </Greets>
            <Greets name = "Sai" heroname ="Iron Man">
                <button>Action </button>
            </Greets>
            <Greets name = "Jamapelle" heroname ="Friday">
            </Greets> */}
            {/* <Welcome /> */}
            {/* <Welcomes name= "Gowtham" heroname="Batman" />
            <Welcomes name = "Sai" heroname ="Iron Man"/>
            <Welcomes name = "Jamapelle" heroname ="Friday"/> */}
            {/* state_component */}
            {/* <Message ></Message> */}

        </div>
    );
}
export default App;