
import react, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Components/header";
import {Link} from "react-router-dom";
import Landing from "./landing";

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";



class ChangePassword extends react.Component{

  constructor(props){

    

    super(props);
    this.state={username:null,password:null,newpassword:null,changed:false};

    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handlenewpassword = this.handlenewpassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.NavigateHome = this.NavigateHome.bind(this);
    
  }

   NavigateHome(){
  
    console.log("NavigateHome")
    return <Link to= "/">
        Go Home
        </Link>
  }
  
  

  handleusername(event) {
    this.setState({username: event.target.value});
  }

  handlepassword(event) {
    this.setState({password: event.target.value});
  }

  handlenewpassword(event) {
    this.setState({newpassword: event.target.value});
  }


  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    /*fetch('http://localhost:5000/change_password/'+this.state.username+'/'+this.state.password+'/'+this.state.newpassword, {
        method: 'POST'  
        
      })
      .then((response) => {
       
        response.json().then((result)=>{

          

            if(result["changed"]=="true"){
              
              
              this.setState({changed:true});
              console.log("password changed");
              
            }

            
        })
      } )
      .catch(
        error => null // Handle the error response object
      )*/

      fetch('http://192.168.54.177:5001/change_password/'+this.state.username+'/'+this.state.password+'/'+this.state.newpassword,{  //private ip of shashank's laptop
                                                        // found using some en0 command

        method: 'POST'   //post api in node's script on Shashank's laptop
        
      })
      .then((response) => {

        
       
        response.json().then((result)=>{

          

          if(result["changed"]=="true"){
              
              
            this.setState({changed:true});
            console.log("password changed");
            
          }


            
        })
      } )
      .catch(
        error => null // Handle the error response object
      )

      

    event.preventDefault();
  }
   
    render(){

      const renderForm=(
        <form onSubmit={this.handleSubmit}>
                            
                              
        <label>
          User Name:
          <input type="text" value={this.state.username} onChange={this.handleusername} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handlepassword} />
        </label>

        <label>
          New Password:
          <input type="text" value={this.state.newpassword} onChange={this.handlenewpassword} />
        </label>
       
        
        <input  type="submit" value="Submit" />
      </form>

      )

        

      return(
          <div className="App">
                  <Header/>
                  <div >

                   
                          
                  {this.state.changed ? this.NavigateHome() : renderForm}  
                              
                  </div>

                  
                
                {/* <Routes>
                <Route path="/" element = {<Landing/>} />

                </Routes>
                 */}
                 
                
          </div>
      )

    }
}

export default ChangePassword;
