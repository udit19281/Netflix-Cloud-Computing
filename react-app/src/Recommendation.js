import react from "react";
import Header from "./Components/header";


class Recommendation extends react.Component{

  constructor(props){

    

    super(props);
    
    this.state={name:null,src:null,rcvd:false};

    
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo(){

    return <video controls autoPlay loop muted >  <source src={this.state.src} type="video/mp4"></source> </video>

    
    
  }

 

  
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    fetch('http://localhost:3001/recommendation/', {
        method: 'POST'  
        
      })
      .then((response) => {
       
        response.json().then((result)=>{this.setState({ src:result["src"],rcvd:true})})
      } )
      .catch(
        error => null // Handle the error response object
      )

      

    event.preventDefault();
  }
   
    render(){

      
    
  
     
      
   

      return(
          <div >
                  <Header/>
                  <div >

                    <form onSubmit={this.handleSubmit}>

                            
                            <input className="xy" type="submit" value="Submit" />
                          </form>
                              
                              
                  </div>



                  
                
                Video:
                {this.state.rcvd ? this.playVideo() : <p>Video Unavaialble</p>}
                

                
                 
                
          </div>
      )

    }
}

export default Recommendation;
