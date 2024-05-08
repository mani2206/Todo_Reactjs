import React from "react";

export default function Header({ title = "TODO LIST" }) {
  return (
    <>
      <header>
        <h5 className="py-3">{title}</h5>
      </header>
    </>
  );
}
