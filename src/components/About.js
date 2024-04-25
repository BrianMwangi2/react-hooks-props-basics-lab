

import React from "react";
import Links from "./Link"; // Assuming Links component is imported

function About({bio}) {
  const githubUrl = "https://github.com/liza";
  const linkedinUrl ="https://www.linkedin.com/in/liza/";

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
    </div>
  );
}

export default About;

