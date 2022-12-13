import react from "react";
import Header from "./Components/header";
import "./landing.css";

function Landing(){
    return(
        <div className="App">
                <Header/>
                <div className="full">
                <p>Hello, Welcome to Netflix</p>
                </div>

                <div className="box2">
                    <h1> About</h1>
                    <ul>
                        <li>New Users to Sign up</li>
                        <li>Log In to proceed to Videos</li>
                        <li>Stream videos by first searching them by name</li>
                        <li> Only existing users can change password</li>
                    </ul>
                </div>
        </div>
    )
}

export default Landing;