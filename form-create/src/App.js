import { BrowserRouter, Route,Switch} from 'react-router-dom'
import FormPage from './main';
import Post from './post';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={FormPage}></Route>
      <Route  path="/post" component={Post}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
