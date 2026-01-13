import React from "react";

const Header = () => {
  return (
    <header className="rounded-xl p-6 
  bg-gradient-to-r from-blue-600 to-indigo-600
  text-white shadow-md">
  
  <h1 className="text-2xl font-semibold">
    Task Board
  </h1>

  <p className="text-sm text-blue-100 mt-1">
    Manage your tasks efficiently
  </p>
</header>

  );
};

export default Header;
