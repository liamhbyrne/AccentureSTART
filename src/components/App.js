import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import { NavigationBar}  from './NavigationBar';
import Profile from "./Profile";
import Home from "./Home";
import CreateTask from "./CreateTask";
import SkillsChooser from "./SkillsChooser"

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute component={NavigationBar} />
        </Switch>
      </Router>
    </AuthProvider>

    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>


    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/create-task" component={CreateTask} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/skills" component={SkillsChooser} />
            </Switch>
          </AuthProvider>
        </Router>

      </div>
    </Container>
    </>
  )
}

export default App