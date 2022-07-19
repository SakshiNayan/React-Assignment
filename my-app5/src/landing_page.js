import './landing.css';
import { useHistory } from 'react-router-dom';
//import {Link} from 'react-router-dom';

const Landing_page=()=>{
    const history= useHistory();
    const handleRoute= ()=>{
        history.push('/postview')
    }
    return (
        <>
        <div className="container1">
            <img src="./banner.jpg" alt="Banner-img"></img>
            <div className='container2'>
                <h2>
                    10x Team 04
                </h2>
                <button onClick={handleRoute}>Enter</button>
                {/* //<Link to="/postview"><button>Enter</button></Link> */}
            
            </div>
            
        </div>
        </>
    
    );
}
export default Landing_page;