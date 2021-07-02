import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
import Home  from "../src/pages/Home/Home";
import View from "../src/pages/View/View";

function App() {
  return (
    <div className="App" >
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/view" component={View}/>
        <Redirect to="/" />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
