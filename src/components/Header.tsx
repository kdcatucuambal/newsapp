import React from "react";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto" href="">
          <h1 className="text-center">{title}</h1>
        </a>
      </div>
    </nav>
  );
};

export default Header;
