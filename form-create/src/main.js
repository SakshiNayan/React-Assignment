import { useState } from "react";
import {Link} from 'react-router-dom';



const FormPage =()=>{
    const [firstname, setFirstname]=useState("");
    const [lastname, setlastname]=useState("");
    const handlefirstname=(e)=>{
        console.log(e.target.value);
    }
    const handleLastname =(e)=>{
        console.log(e.target.value);
    }
    return(
        <>
        Hello
        <div className="container">
            <lable for="firstname">FirstName:</lable>
            <input onChange={handlefirstname} id="firstname"></input>
            <lable for="lastname">LastName:</lable>
            <input onChange={handleLastname} id="lastname"></input>
            <Link to="/post"><button>Enter</button></Link>

        </div>
        </>
    )
}
export default FormPage;