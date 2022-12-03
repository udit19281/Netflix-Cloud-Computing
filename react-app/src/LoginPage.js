import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Components/header";
import { Link } from "react-router-dom";
import MainHeading from "./Components/shared/MainHeading"

import Videos from "./Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class LoginPage extends react.Component {
  constructor(props) {
    super(props);
    this.state = { username: null, password: null, logged_in: false };

    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.NavigateVideoSearch = this.NavigateVideoSearch.bind(this);
  }

  NavigateVideoSearch() {
    console.log("NavigateVideoSearch");
    return <Link to="/videos">Go to Videos</Link>;
  }

  handleusername(event) {
    this.setState({ username: event.target.value });
  }

  handlepassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    fetch(
      "http://localhost:5000/login/" +
        this.state.username +
        "/" +
        this.state.password,
      {
        method: "POST",
      }
    )
      .then((response) => {
        response.json().then((result) => {
          if (result["exists"] == "true") {
            this.setState({ logged_in: true });
            console.log("Logged in");
          }
        });
      })
      .catch(
        (error) => null // Handle the error response object
      );

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

  render() {
    const renderForm = (
      // <div className="form-signin w-full h-full m-auto flex flex-col items-center justify-center space-y-10">
      // <div className="w-full flex items-center justify-center">

      // <MainHeading text="Netflix LogIn"/>
      // </div>
      // <form onSubmit={this.handleSubmit} className="space-y-5 flex flex-col items-center justify-center w-full">
      //   <div className="form-floating w-1/2 md:w-1/3">
      //     {/* <label> */}
      //     {/* User Name: */}
      //     {/* <label>User Name:</label> */}
      //     <input
      //       type="text"
      //       value={this.state.username}
      //       onChange={this.handleusername}
      //       placeholder="Username"
      //       className="border rounded-md w-full p-2 border-black"
      //     />
      //     {/* </label> */}
      //   </div>
      //   <div className="w-1/2 md:w-1/3">
      //     {/* <label> */}
      //     {/* Password: */}
      //     <input
      //       type="password"
      //       value={this.state.password}
      //       onChange={this.handlepassword}
      //       placeholder="Password"
      //       className="border rounded-md w-full p-2 border-black"
      //     />
      //     {/* </label> */}
      //   </div>
      //   <input type="submit" value="Submit" className="bg-blue-600 rounded-md px-4 py-2 w-1/2 md:w-1/3 hover:bg-green-400 cursor-pointer hover:text-white	" />
      // </form>
      // </div>
    <section className="bg-gray-50 dark:bg-gray-900 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" alt="logo"/>
          Netflix    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={this.handleSubmit}>
                  <div>
                      <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="text" value={this.state.username} onChange={this.handleusername} name="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc123" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" value={this.state.password} onChange={this.handlepassword} placeholder="*****" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="/forgetPassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" value="Submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-700">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    );

    return (
      <div className="">
      {/* <div className="h-1/10"> */}

        <Header />
      {/* </div> */}
        {/* <div className="h-9/10"> */}
          {this.state.logged_in ? this.NavigateVideoSearch() : renderForm}
        {/* </div> */}

        <Routes>
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    );
  }
}

export default LoginPage;
