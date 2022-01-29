import React, { Component } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "./components";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_get");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
}

App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <Helmet>
        <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
      </Helmet>
      ;
    </div>
  );
};

export default App;
