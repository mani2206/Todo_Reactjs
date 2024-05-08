import React from "react";

function Footer({ length }) {
  const year = new Date();
  return (
    <>
      <footer>
        <p>{length} List {length === 1 || length === 0 ?"Item":"Items"} </p>
        copyrights &copy; {year.getFullYear()}
      </footer>
    </>
  );
}

export default Footer;
