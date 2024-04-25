
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Import user data from external file
import user from "../data/user";

function App() {
  const { name, age, city, github, linkedin, bio } = user; // Destructure user object

  return (
    <div>
      <NavBar />
      {/* Pass user data to Home component */}
      <Home name={name} age={age} city={city} />
      
      {/* Pass bio, github, and linkedin props to About component */}
      <About bio={bio} githubUrl={github} linkedinUrl={linkedin} />
    </div>
  );
}

export default App;

