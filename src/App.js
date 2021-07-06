import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './styles/main.css';

const Stopwatch = React.lazy(() => import('./components/Stopwatch/Stopwatch'));
const Calculator = React.lazy(() => import('./components/Calculator'));

export default function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="appWrapper">
                    <nav className="sidenav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/stopwatch">Stopwatch</Link>
                            </li>
                            <li>
                                <Link to="/calculator">Calculator</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/stopwatch">
                            <Stopwatch/>
                        </Route>
                        <Route path="/calculator">
                            <Calculator/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Suspense>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}