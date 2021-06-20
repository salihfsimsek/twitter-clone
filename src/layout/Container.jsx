import React from "react";

const Container = ({ children }) => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto flex">{children}</main>
  );
};

export default Container;
