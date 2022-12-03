import react from "react";
import Header from "./Components/header";

class Videos extends react.Component {
  constructor(props) {
    super(props);

    this.state = { name: null, src: null, rcvd: false };

    this.handlename = this.handlename.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo() {
    return (
      <video controls autoPlay loop muted>
        {" "}
        <source src={this.state.src} type="video/mp4"></source>{" "}
      </video>
    );
  }

  handlename(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    fetch("http://localhost:3001/videos/" + this.state.name, {
      method: "POST",
    })
      .then((response) => {
        response.json().then((result) => {
          this.setState({ src: result["src"], rcvd: true });
        });
      })
      .catch(
        (error) => null // Handle the error response object
      );

    event.preventDefault();
  }

  render() {
    // const renderForm = ();
    return (
      <div>
        <Header />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.name}
                onChange={this.handlename}
              />
            </label>
            <input className="xy" type="submit" value="Submit" />
          </form>
        </div>
        Video:
        {this.state.rcvd ? this.playVideo() : <p>Video Unavaialble</p>}
      </div>
    );
  }
}

export default Videos;
