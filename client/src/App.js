import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import { verifyUser } from "./services/auth";
import Home from './screens/Home/Home';
 

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    verify();
  }, []);
  const verify = async () => {
    let user = await verifyUser()
    console.log(user)
    setCurrentUser(user)
  }
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
      {/* <Route path='/' component={Home} /> */}
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn verify={verify} />
        </Route>
       
      </Switch>
    </div>
  );
}

export default App;
