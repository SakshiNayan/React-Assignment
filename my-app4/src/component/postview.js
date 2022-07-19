//import Logo from "./assets/logo1.png"
import Logo from "./../assets/logo1.png";
import Camera from "./../assets/camera1.png"
import { useEffect, useState } from "react";
import "./post-view.css";
const PostView = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3004/user').then((data) => {
            return data.json()
        }).then((userData) => {
            setUserData(userData)
            console.log(userData)
        })
    }, []);
    return (
        <>
            <div className="container">
                <header>
                    <div className="nav">
                        <img src={Logo} alt="insta-logo"></img>
                        <img src={Camera} alt="camera"></img>

                    </div>
                </header>
                <hr />
                <div>
                    {
                        userData.map((user, i) => {
                            return (
                                <div className="body">
                                    <div className="card">
                                        <div className="user-info" key={i}>
                                            <h3>{user.name}</h3>
                                            <span className="location">{user.location}</span>
                                        </div>
                                        <div className="user-image">
                                            <img className="post" src={user.PostImage} alt="user defined "></img>
                                        </div>
                                        <div className="heart">
                                            <img className="heart-image" src={user.heart} alt="user defined"></img>


                                            <div className="user-meta">
                                                <span>{user.date}</span>
                                            </div></div>
                                        <div className="user-likes">
                                            {user.likes} likes
                                        </div>
                                        <div className="user-description">
                                            {user.description}
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default PostView;