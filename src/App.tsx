import * as React from 'react';
import Button from 'antd/lib/button';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from 'react-router-dom';
import './App.css';

const Links = () => (
  <div>
    <Link to="/">home</Link>
    <Link to="/hello/">hello</Link>
    <Link to={{ pathname: '/world' }}>world</Link>
  </div>
);

const Home = () => <h2>home</h2>;
const Hello = () => <h2>hello</h2>;
const World = () => <h2>world</h2>;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Links />
            <Route exact={true} path="/" component={Home} />
            <Route path="/hello" strict={true} component={Hello} />
            <Route path="/world" strict={true} component={World} />

            <Route
              path="/world/:country"
              render={(props: RouteComponentProps<{ country: string }>) => {
                const con = props.match.params.country;
                return <div> {con}</div>;
              }}
            />
          </div>
        </Router>
        <Button type="primary" size="small">
          Button
        </Button>
      </div>
    );
  }
}

export default App;
