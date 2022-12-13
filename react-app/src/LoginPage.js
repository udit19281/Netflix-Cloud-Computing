
import react, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Components/header";
import {Link} from "react-router-dom";

import Videos from "./Videos";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";



class LoginPage extends react.Component{

  constructor(props){

    

    super(props);
    this.state={username:null,password:null,logged_in:false};

    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.NavigateVideoSearch = this.NavigateVideoSearch.bind(this);
    
  }

   NavigateVideoSearch(){
  
    console.log("NavigateVideoSearch")
    return <Link to= "/videos">
        Go to Videos
        </Link>
  }
  
  

  handleusername(event) {
    this.setState({username: event.target.value});
  }

  handlepassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    console.log("Submit")

    fetch('http://192.168.54.177:5001/log_in/'+this.state.username+'/'+this.state.password, {
        method: 'POST'  
        
      })
      .then((response) => {
       
        response.json().then((result)=>{

          

            if(result["exists"]=="true"){
              
              
              this.setState({logged_in:true});
              console.log("Logged in");
              
            }

            
        })
      } )
      .catch(
        error => null // Handle the error response object
      )

      /*fetch('http://192.168.54.177:5001/shashank',{  //private ip of shashank's laptop
                                                        // found using some en0 command

        method: 'POST'   //post api in node's script on Shashank's laptop
        
      })
      .then((response) => {

        
       
        response.json().then((result)=>{

          

            console.log(result)

            
        })
      } )
      .catch(
        error => null // Handle the error response object
      )*/

      

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
        
        <input  type="submit" value="Submit" />
      </form>

      )

        

      return(
          <div className="App">
                  <Header/>
                  <div >

                   
                          
                  {this.state.logged_in ? this.NavigateVideoSearch() : renderForm}  
                              
                  </div>

                  
                
                {/* <Routes>
                    <Route path="/videos" element={<Videos />} />

                </Routes>
                 */}
                 
                
          </div>
      )

    }
}

export default LoginPage;
