import { useEffect } from "react";

//REACT ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import HomePage from "./pages/homePage";
import CheckoutPage from "./pages/checkoutPage";
import loginPage from "./pages/loginPage";

//CONTEXT
import { useStateValue } from "./Context/StateProvider";

//FIREBASE
import { auth } from "./firebase";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //The user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={loginPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
