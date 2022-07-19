import logo from './logo.svg';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <img className="card-logo" src={props.CardLogo}></img>
      <div>
      <h1 className="employeeName">{props.Name}</h1>
      </div>
      <h4 className='textcolor'>Location</h4>
      <div className='employeeData'>{props.Location}</div>
      <h4 className='textcolor'>Blood group</h4>
      <div className='employeeData'>{props.Blood}</div>
      <h4 className='textcolor'>Age</h4>
      <div className='employeeData'>{props.Age}</div>
 
      

    </div>
  );
}

export default App;
