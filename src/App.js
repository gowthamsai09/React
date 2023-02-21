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
import ListRendering from './components/ListRen';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline'
import Form from './components/form';
import Lifecyclemount from './components/Lifecyclemount';
import FragmentDemo from './components/FragmentDemo';
import Purecomponent from './components/Purecomponent_for_extending_class';
import Parentcomp_EC from './components/Parentcomp_EC';
import Refs from './components/Refs';
import Forwardref_parentInp from './components/Forwardref_parentInp';
import OnClick_HOC from './components/OnClick_HOC';
import Hover_HOC from './components/Hover_HOC';
import { UserProvider } from './components/React_Context/userContext';
import ComponentA from './components/React_Context/ComponentA';
import Postlist from './components/Http/Postlist';
import PostForm from './components/Http/PostForm';
function App() {
    return (
         <div className = "App" >
            {/* <Postlist /> */}
            <PostForm />
            {/* <UserProvider value= 'Sai'>
                <ComponentA />
            </UserProvider> */}
            {/* <OnClick_HOC name='sai'/>
            <Hover_HOC /> */}
            {/* <Forwardref_parentInp /> */}
            {/* <Refs /> */}
            {/* <Parentcomp_EC /> */}
            {/* <Purecomponent /> */}
            {/* <FragmentDemo /> */}
            {/* <Lifecyclemount /> */}
            {/* <Form /> */}
            {/* <Inline /> */}
            {/* <Stylesheet primary={true} /> */}
            {/* <ListRendering /> */}
            {/* <Parentcomponent /> */}
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