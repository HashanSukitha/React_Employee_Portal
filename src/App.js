


import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Home from "./pages/Home";
import EmployeeProfile from "./pages/EmployeeProfile";
import NewApplication from "./pages/NewApplication";





function App() {
  return (
  <>
      <Router>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/EmployeeProfile" component={EmployeeProfile} />      
          <Route path="/NewApplication" component={NewApplication} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
