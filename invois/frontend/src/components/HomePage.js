import React, { Component } from "react";
import { render } from "react-dom/client";

import axios from 'axios'



class HomePage extends React.Component {

    state = { details: [], }
  
    componentDidMount() {

      let data;
      axios.get('http://localhost:8000/api/')
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => { })
    }
    render() {
        return (
            <div class="homepage_main">
              <a href='login'>Login</a><br/>
              <a href='register'>Register</a>
                <h1>HomePage</h1>
                <header>Data Generated From Django</header>
                <hr></hr>
                {this.state.details.map((output, id) => (
                    <div>
                        <br></br>
                        <h2>{output.first_name}</h2>
                        <h3>{output.last_name}</h3>
                        <h2>{output.username}</h2>
                        <h2>{output.password}</h2>
                        <br></br>

                    </div>
                ))}
                <br></br>
                
                
            </div>
        );
    }
}

export default HomePage