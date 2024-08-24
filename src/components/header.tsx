import React from "react";

interface HeaderProps {
  heading: string;
}

const Header: React.FC<HeaderProps> = ({ heading }) => {
  return (
    <header className="w-full bg-blue-950 text-white py-4 shadow-md top-0">
      <div className="container mx-auto flex justify-center items-center px-6">
        <div className="text-2xl font-bold">{heading}</div>
      </div>
    </header>
  );
};

export default Header;