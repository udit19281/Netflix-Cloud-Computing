
import react, {useState} from "react";



var data=[];
const getComplaintCards = (arrayOfComplain,self) =>{
  return arrayOfComplain.map((res,i)=>{
    return(
        <><div id={i} className="Card">
          <p>Crime id: {res.ppcrimeid}</p>
          <p>Description:{res.ppcrimeaddinfo}</p>
          </div>
          </>
          );
  });
};
class Videos extends react.Component{

  constructor(props){

    

    super(props);
    this.state={name:null,src:null};

    this.handlename = this.handlename.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleyname(event) {
    this.setState({year: event.target.value});
  }

  
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    fetch('http://localhost:3001/videos/'+this.state.name, {
        method: 'POST'  
        
      })
      .then((response) => {
       
        response.json().then((result)=>{this.setState({ src:result["src"]})})
      } )
      .catch(
        error => null // Handle the error response object
      )

      

    event.preventDefault();
  }
   
    render(){

        let content
    if(this.state.src!=null) {
      content = <video   >  <source src={this.state.src} type="video/mp4"/> </video>
     
      
    } else {
        <p> Video will stream here </p>
      
    }

      return(
          <div >
                  
                  <div >

                    <form onSubmit={this.handleSubmit}>

                            <label>
                              Name:
                              <input type="text" value={this.state.name} onChange={this.handlename} />
                            </label>
                            <input className="xy" type="submit" value="Submit" />
                          </form>
                              
                              
                  </div>

                  
                
                Video:
                <div >
                    {content}
                  

               </div>

                
                 
                
          </div>
      )

    }
}

export default Search;
Footer