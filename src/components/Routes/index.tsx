import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

//Comentarios: no funciona
const Routes = () => {

    return (
        <Router>
            <div className="container mt-5">
            <div className="btn-group">
                <Link to="/" className="btn btn-dark">Inicio</Link>
                <Link to="/bla" className="btn btn-dark">Bla bla bla</Link>
                <NavLink to="/users" className="btn btn-dark">Users</NavLink>
            </div>
            <hr />
                <Route path="/bla">
                <h1>Inicio</h1>
                </Route>
                <Route path="/users">
                <h1>Users</h1>
                </Route>
                <Route path="/">
                <h1>Inicio</h1>
                </Route>
            </div>
      </Router>

    )
}

export default Routes;