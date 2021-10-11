import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import about from './components/about';
import resume from './components/resume';
import blog from './components/blog';
import books from './components/books';

function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route exact path="/" component={home}/>
              <Route exact path="/about" component={about}/>
              <Route exact path="/resume" component={resume}/>
              <Route exact path="/blog" component={blog}/>
              <Route exact path="/books" component={books}/>
          </Switch>
        </div>
    </Router>
  );
}
export default App;