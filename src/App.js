import {Routes, Route} from "react-router-dom";
import Dog from "./Dog";
import Dogs from "./Dogs";
import Errorpage from "./Errorpage";
import Navbar from "./Navbar";
import React, { Component } from "react";
import whiskey from "./imgs/whiskey.jpg"
import tubby from "./imgs/tubby.jpg"
import hazel from "./imgs/hazel.jpg"

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <Routes>
          <Route exact path="/dogs/:dogname" element={<Dog dogs={this.props.dogs} />} />
          <Route exact path="/dogs" element={<Dogs dogs={this.props.dogs} />} />
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
      </div>
    )
  }
}


export default App;
