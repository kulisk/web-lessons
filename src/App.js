import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './styles/main.css';

const Stopwatch = React.lazy(() => import('./components/Stopwatch/Stopwatch'));
const Clock = React.lazy(() => import('./components/Clock'));
const Calculator = React.lazy(() => import('./components/Calculator'));
const Todo = React.lazy(() => import('./components/Todo'));
const Timeline = React.lazy(() => import('./components/Timeline'));
const Quiz = React.lazy(() => import('./components/Quiz'));

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
                                <Link to="/clock">Clock</Link>
                            </li>
                            <li>
                                <Link to="/calculator">Calculator</Link>
                            </li>
                            <li>
                                <Link to="/todo">Todo</Link>
                            </li>
                            <li>
                                <Link to="/timeline">Timeline</Link>
                            </li>
                            <li>
                                <Link to="/quiz">Quiz</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/todo">
                            <Todo/>
                        </Route>
                        <Route path="/timeline">
                            <Timeline/>
                        </Route>
                        <Route path="/quiz">
                            <Quiz/>
                        </Route>
                        <Route path="/clock">
                            <Clock/>
                        </Route>
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