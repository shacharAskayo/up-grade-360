import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Home from './pages/Home';
import Header from './cmps/Header';
import About from './pages/About'
import Questions from './pages/Questions'
import Tracks from './pages/Tracks'
import Contect from './pages/Contect'
import Login from './pages/Login'
import Board from './pages/Board'

function App() {

  return (
    <div className="app">
      <Header />
      <div className='main-route-view'>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/questions" component={Questions} />
            <Route path="/tracks" component={Tracks} />
            <Route path="/contect" component={Contect} />
            <Route path="/login" component={Login} />
            <Route path="/board" component={Board} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default  App;
