import { Link, Route, Switch } from "react-router-dom"
import './RouterDemo';
import { Home } from "./Home";
import { About } from "./About";
import { Userlist } from "./Userlist";
import { UserDetails } from "./UserDetails";
import { Login } from "./Login";
export const RouterDemo = ()=>{
    return <>
    <div className="link">
    <Link className="link1" to="/">Home</Link>
    <Link className="link1" to="/about">About us</Link>
    <Link className="link1" to="/userlist">User List</Link>
    {/* <Link className="link1" to="/Login">Login</Link> */}
    </div>
<div>
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
        <About />
    </Route>
    <Route path="/userlist">
        <Userlist />
    </Route>
    <Route path="/userDetils/:id">
        <UserDetails />
    </Route>
    <Route path="/Login">
        <Login />
    </Route>
    <Route>404 Page not found</Route>
    </Switch>
    </div>
    </>
}