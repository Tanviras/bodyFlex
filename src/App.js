import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import GymMembership from "./Components/GymMembership/GymMembership/GymMembership";
import Home from './Components/Home/Home/Home';
import OurClasses from "./Components/OurClasses/OurClasses/OurClasses";
import Pricing from "./Components/Pricing/Pricing/Pricing";




function App() {
  return (
    <div>
   

      <Router>
      <Switch>

      <Route exact path='/'>
      <Home></Home>
      </Route>

      <Route path='/home'>
      <Home></Home>
      </Route>

      <Route path='/ourClasses'>
      <OurClasses></OurClasses>
      </Route>

      <Route path='/pricing'>
      <Pricing></Pricing>
      </Route>

      <Route path='/membership/:classId'>
      <GymMembership></GymMembership>
      </Route>
      

      </Switch>
      </Router>


      
      </div>
    

          
          
          

       
  );
}

export default App;
