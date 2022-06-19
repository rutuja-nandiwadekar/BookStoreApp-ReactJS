import LoginForm from "./components/user/LoginForm";
import RegistrationForm from "./components/user/RegistrationForm";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import ForgotPassword from "./components/user/ForgotPassword";
import ResetPassword from "./components/user/ResetPassword";
import AddBook from "./components/Book/AddBook";
import DashBoard from "./components/Book/DashBoard";



function App() {
  return (
    <div className="App">
    
    
    {/* <HomeHeader></HomeHeader> */}
      <BrowserRouter>
        <Switch>
        <Route exact path='/dashboard' component={DashBoard}></Route>
        <Route exact path='/addbook' component={AddBook}></Route>
          <Route exact path='/resetpass' component={ResetPassword}></Route>
          <Route exact path='/forgotpass' component={ForgotPassword}></Route>
          <Route exact path='/registration' component={RegistrationForm}></Route>
          <Route exact path='/login' component={LoginForm}></Route>
          <Route path='/' component={Home}></Route>
          <Route path='/login' component={LoginForm}></Route>
          <Route path='/registration' component={RegistrationForm}></Route>
          <Route path='/forgotpass' component={ForgotPassword}></Route>
          <Route path='/resetpass' component={ResetPassword}></Route>
          <Route path='/addbook' component={AddBook}></Route>
          <Route path='/dashboard' component={DashBoard}></Route>
        </Switch>
      </BrowserRouter>
     

      {/* <MaterialUi/> */}

    

  
    </div>
  );
}

export default App;
