
import react, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Videos from "./Videos";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

function NavigateVideoSearch(){
  // 👇️ navigate to /contacts
  const   navigate = useNavigate();
  console.log("NavigateVideoSearch")
  navigate('/videos');
};

class LoginPage extends react.Component{

  constructor(props){

    

    super(props);
    this.state={username:null,password:null,user:false};

    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

   

  handleusername(event) {
    this.setState({username: event.target.value});
  }

  handlepassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    fetch('http://localhost:5000/log_in/'+this.state.username+'/'+this.state.password, {
        method: 'POST'  
        
      })
      .then((response) => {
       
        response.json().then((result)=>{

          

            if(result["exists"]=="true"){
              
              const   navigate = useNavigate();
              
              navigate('/videos');
            }
        })
      } )
      .catch(
        error => null // Handle the error response object
      )

      

    event.preventDefault();
  }
   
    render(){

        

      return(
          <div className="App">
                  
                  <div className>

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

                          
                              
                              
                  </div>

                  
                
                <Routes>
                    <Route path="/videos" element={<Videos />} />

                </Routes>
                
                 
                
          </div>
      )

    }
}

export default LoginPage;
