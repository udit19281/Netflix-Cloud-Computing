
import react, {useState} from "react";
import Videos from Videos.js;

class LoginPage extends react.Component{

  constructor(props){

    

    super(props);
    this.state={username:null,password:null,user:false};

    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

     navigate = useNavigate();

   navigateVideoSearch = () => {
    // 👇️ navigate to /contacts
    navigate('/videos');
  };

  handleusername(event) {
    this.setState({username: event.target.value});
  }

  handlepassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    fetch('http://localhost:3000/log_in/'+this.state.username+'/'+this.state.password, {
        method: 'POST'  
        
      })
      .then((response) => {
       
        response.json().then((result)=>{

            if(result["exists"]=="true"){
                user=true
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
                              <input type="text" value={this.state.password} onChange={this.handleusername} />
                            </label>
                            
                            <input  type="submit" value="Submit" />
                          </form>

                          <button onClick={navigateVideoSearch}>Go to Videos after logging in</button>
                              
                              
                  </div>

                  
                
                <Routes>
                    <Route path="/videos" element={<Videos />} />

                </Routes>
                
                 
                
          </div>
      )

    }
}

export default Search;
