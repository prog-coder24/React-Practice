import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Tesla from "./Tesla";
import Jaguar from "./Jaguar";
import FormComponent from "./Form";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/tesla" component={Tesla} />
        <Route path="/jaguar" component={Jaguar} />
        <Route path="/form" component={FormComponent} />
      </Switch>
    </Router>
  );
};

export default App;
