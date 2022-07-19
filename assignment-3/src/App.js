import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer_info';
import Header from './Components/Header';
import Order from './Components/Order_info';
import Product from './Components/Product_list';

const User ={
  Name: 'Alan Ford',
  EmployeeId: '0009536',
  Appointment: '9:00 (24-06-2022)',
  Email: 'alan.ford@gmail.com',
  phone:'+6395278462',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
  product_name:'Boltart Bosbeen',
  product_dis:"This is a random discription about the product mentioned above "
}
  


function App() {
  return (
    <div className="App">
    <Header User={User}/>
    <Customer User={User}/>
    
    <Order User={User}/>
    <Product User={User}/>
    
    </div>
  );
}

export default App;

   {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}