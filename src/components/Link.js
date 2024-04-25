import React from "react";

function Links({ githubUrl, linkedinUrl }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={githubUrl}>{githubUrl}</a>
      <br />
      <a href={linkedinUrl}>{linkedinUrl}</a>
    </div>
  );
}

export default Links;
