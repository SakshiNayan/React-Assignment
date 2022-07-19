import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing_page from './landing_page';
import Post_view from './post_view';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing_page}></Route>
      <Route exact path="/postview" component={Post_view}></Route>
    </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
