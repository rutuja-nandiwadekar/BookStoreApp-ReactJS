import LoginForm from "./components/user/LoginForm";
import RegistrationForm from "./components/user/RegistrationForm";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import ForgotPassword from "./components/user/ForgotPassword";
import ResetPassword from "./components/user/ResetPassword";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Switch>
          <Route exact path='/resetpass' component={ResetPassword}></Route>
          <Route exact path='/forgotpass' component={ForgotPassword}></Route>
          <Route exact path='/registration' component={RegistrationForm}></Route>
          <Route exact path='/login' component={LoginForm}></Route>
          <Route path='/' component={Home}></Route>
          <Route path='/login' component={LoginForm}></Route>
          <Route path='/registration' component={RegistrationForm}></Route>
          <Route path='/forgotpass' component={ForgotPassword}></Route>
          <Route path='/resetpass' component={ResetPassword}></Route>
        </Switch>
      </BrowserRouter>

      {/* <MaterialUi/> */}
    </div>
  );
}

export default App;
