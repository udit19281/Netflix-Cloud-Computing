import {useState} from "react";
import Header from "./Components/header";
import MainHeading from "./Components/shared/MainHeading"
// UI : 


function Landing(){

    return(
        <div className="App">
                <Header/>
                <MainHeading text="Welcome to the Netflix"/>
        </div>
    )
}

export default Landing;